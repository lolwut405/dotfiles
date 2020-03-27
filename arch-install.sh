#!/bin/sh
set -x  #echo on

# Partition (do lsblk first. cfdisk if need done manually)
wipefs -a /dev/sda
parted -s -a optimal /dev/sda 'mklabel msdos'
parted -s -a optimal /dev/sda 'mkpart primary xfs 1Mib 100% set 1 boot on'
mkfs.xfs /dev/sda1 -f
mount /dev/sda1 /mnt

# Install
echo "Server = http://mirrors.advancedhosters.com/archlinux/\$repo/os/\$arch" > /etc/pacman.d/mirrorlist
echo "Server = http://mirror.wdc1.us.leaseweb.net/archlinux/\$repo/os/\$arch" >> /etc/pacman.d/mirrorlist
pacstrap /mnt base base-devel linux linux-firmware grub git htop neofetch openssh vi wget xfsprogs dhclient networkmanager chrony dbus-broker earlyoom dracut
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
chroot /mnt grub-install /dev/sda
chroot /mnt grub-mkconfig -o /boot/grub/grub.cfg

# NTP
chroot /mnt systemctl enable chronyd
sed -i "s/! server/server/" /mnt/etc/chrony.conf

# Network
chroot /mnt systemctl enable NetworkManager
echo -e '[connectivity]\nuri=' > /mnt/etc/NetworkManager/conf.d/20-connectivity.conf

# System tweaks (LVM check, Swappiness, systemd, BFQ)
chroot /mnt systemctl enable dbus-broker earlyoom
chroot /mnt systemctl --global enable dbus-broker
chroot /mnt systemctl mask systemd-homed systemd-userdbd
chroot /mnt systemctl mask lvm2-lvmetad.{service,socket}
echo -e 'vm.swappiness = 10\nvm.vfs_cache_pressure = 50' > /mnt/etc/sysctl.d/99-sysctl.conf
echo 'ACTION=="add|change", KERNEL=="sd[a-z]", ATTR{queue/rotational}=="0|1", ATTR{queue/scheduler}="bfq"' > /mnt/etc/udev/rules.d/60-ioschedulers.rules

pacman -Sy --noconfirm dracut
cat <<EOF >> /mnt/etc/dracut.conf.d/myflags.conf
hostonly="yes"
omit_dracutmodules+="bootchart dash busybox network-legacy network dmsquash-live-ntfs multipath stratis cifs fcoe fcoe-uefi iscsi nbd ssh-client biosdevname btrfs"
stdloglvl="3"
show_modules="yes"
EOF
dracut /mnt/boot/initramfs-linux.img
dracut -N /mnt/boot/initramfs-linux-fallback.img
grub-mkconfig -o /mnt/boot/grub/grub.cfg

# Account
echo "%wheel ALL=(ALL) NOPASSWD: ALL" > /mnt/etc/sudoers.d/wheel
chroot /mnt useradd -m -G wheel blah
chroot /mnt passwd blah

# Done
echo "Done! Please reboot"
