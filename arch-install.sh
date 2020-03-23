#!/bin/sh
set -x  #echo on

# Partition (do lsblk first. cfdisk if need done manually)
wipefs -a /dev/sda
parted -s -a optimal /dev/sda 'mklabel msdos'
parted -s -a optimal /dev/sda 'mkpart primary xfs 1Mib -1Gib set 1 boot on'
parted -s -a optimal /dev/sda 'mkpart primary linux-swap -1GiB 100%'
mkfs.xfs /dev/sda1 -f
mount /dev/sda1 /mnt

# Install
echo "Server = http://mirrors.advancedhosters.com/archlinux/\$repo/os/\$arch" > /etc/pacman.d/mirrorlist
echo "Server = http://mirror.wdc1.us.leaseweb.net/archlinux/\$repo/os/\$arch" >> /etc/pacman.d/mirrorlist
pacstrap /mnt base base-devel linux linux-firmware grub htop neofetch openssh vi wget dhclient networkmanager chrony dbus-broker
genfstab -U /mnt >> /mnt/etc/fstab

# Mount temp filesystems
mount -t proc proc /mnt/proc
mount -t sysfs sys /mnt/sys
mount -o rbind /dev /mnt/dev

# Config
echo blah > /mnt/etc/hostname
chroot /mnt hwclock --systohc --utc
chroot /mnt ln -sf /usr/share/zoneinfo/America/New_York /etc/localtime
export LANG=en_US.UTF-8
echo LANG=$LANG > /mnt/etc/locale.conf
echo $LANG UTF-8 > /mnt/etc/locale.gen
chroot /mnt locale-gen

# Grub (dual-boot: os-prober ntfs-3g)
chroot /mnt grub-install /dev/sda
chroot /mnt grub-mkconfig -o /boot/grub/grub.cfg

# Chrony (NTP)
chroot /mnt systemctl enable chronyd
sed -i "s/! server/server/" /mnt/etc/chrony.conf

# Network
chroot /mnt systemctl enable NetworkManager
cat <<EOF >> /mnt/etc/NetworkManager/conf.d/20-connectivity.conf
[connectivity]
uri=
EOF

# System tweaks (LVM check, Swappiness, systemd, BFQ)
chroot /mnt systemctl enable dbus-broker
chroot /mnt systemctl --global enable dbus-broker
chroot /mnt systemctl mask systemd-homed systemd-userdbd
#chroot /mnt systemctl mask lvm2-lvmetad.{service,socket}
echo 'ACTION=="add|change", KERNEL=="sd[a-z]", ATTR{queue/rotational}=="0|1", ATTR{queue/scheduler}="bfq"' > /mnt/etc/udev/rules.d/60-ioschedulers.rules

# Account
echo "%wheel ALL=(ALL) NOPASSWD: ALL" > /mnt/etc/sudoers.d/wheel
chroot /mnt useradd -m -G wheel blah
chroot /mnt passwd blah
#chroot /mnt passwd

# Done
echo "Done! Please reboot and login as root account"

