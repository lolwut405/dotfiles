#!/bin/bash
set -x  #echo on

# Partition (do lsblk first. cfdisk if need done manually)
wipefs -a /dev/sda
parted /dev/sda -- mklabel msdos
parted /dev/sda -- mkpart primary 1Mib 100%
mkfs.xfs /dev/sda1
mount /dev/sda1 /mnt

# Install
timedatectl set-ntp true
echo "Server = http://mirrors.advancedhosters.com/archlinux/\$repo/os/\$arch" > /etc/pacman.d/mirrorlist
echo "Server = http://mirror.wdc1.us.leaseweb.net/archlinux/\$repo/os/\$arch" >> /etc/pacman.d/mirrorlist
pacstrap /mnt base base-devel linux linux-firmware grub git htop neofetch openssh vi vim wget xfsprogs chrony dhclient networkmanager
genfstab -U /mnt >> /mnt/etc/fstab

# Mount temp filesystems
mount -t proc proc /mnt/proc
mount -t sysfs sys /mnt/sys
mount -o rbind /dev /mnt/dev

# Config
echo vm > /mnt/etc/hostname  #desktop/laptop
chroot /mnt hwclock --systohc --utc
chroot /mnt ln -sf /usr/share/zoneinfo/America/New_York /etc/localtime
export LANG=en_US.UTF-8
echo LANG=$LANG > /mnt/etc/locale.conf
echo $LANG UTF-8 > /mnt/etc/locale.gen
chroot /mnt locale-gen

# Grub (dual-boot: os-prober ntfs-3g)
chroot /mnt grub-install /dev/$disk
chroot /mnt grub-mkconfig -o /boot/grub/grub.cfg

# NTP
chroot /mnt systemctl enable chronyd
sed -i "s/! server/server/" /mnt/etc/chrony.conf

# Network
chroot /mnt systemctl enable NetworkManager
echo -e '[connectivity]\nuri=' > /mnt/etc/NetworkManager/conf.d/20-connectivity.conf

# Account
echo "%wheel ALL=(ALL) NOPASSWD: ALL" > /mnt/etc/sudoers.d/wheel
chroot /mnt useradd -m -g users -G wheel blah
chroot /mnt passwd blah

# Done
echo "Done! Please reboot"
