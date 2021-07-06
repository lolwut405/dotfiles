#!/bin/bash
set -x  #echo on

# Partioning. msdos layout. Do lsblk first. cfdisk as an alternative
# dd if=/path/to/image.iso of=/dev/sdX bs=8M status=progress oflag=direct
wipefs -a /dev/sda
parted /dev/sda -- mklabel msdos
parted /dev/sda -- mkpart primary 1Mib 100%
mkfs.btrfs /dev/sda1 -f
mount /dev/sda1 /mnt

# Install
echo "Server = https://america.mirror.pkgbuild.com/\$repo/os/\$arch" > /etc/pacman.d/mirrorlist
echo "Server = https://mirror.arizona.edu/archlinux/\$repo/os/\$arch" >> /etc/pacman.d/mirrorlist

timedatectl set-timezone America/New_York; timedatectl set-ntp true
pacstrap /mnt base base-devel linux linux-firmware grub htop openssh sudo vi vim wget btrfs-progs dbus-broker zram-generator
genfstab -U /mnt >> /mnt/etc/fstab

# Grub
mount -t proc /proc /mnt/proc
mount -t sysfs /sys /mnt/sys
mount -o rbind /dev /mnt/dev
chroot /mnt grub-install /dev/sda
chroot /mnt grub-mkconfig -o /boot/grub/grub.cfg

# Systemd-firstboot
systemd-firstboot --root=/mnt --locale=en_US.UTF-8 --keymap=us --timezone=America/New_York --hostname=arch --setup-machine-id

# Systemd-networkd
systemctl enable systemd-networkd --root=/mnt
printf '[Match] \nName=en* \n[Network] \nDHCP=ipv4' > /mnt/etc/systemd/network/10-wired.network

# Systemd-resolved
systemctl enable systemd-resolved --root=/mnt
chroot /mnt ln -sf /run/systemd/resolve/stub-resolv.conf /etc/resolv.conf

# Systemd-timesyncd
systemctl enable systemd-timesyncd --root=/mnt

# Systemd-oomd
systemctl enable systemd-oomd --root=/mnt

# Zram
printf '[zram0] \nzram-fraction = 1.0 \nmax-zram-size=8192' > /mnt/etc/systemd/zram-generator.conf
printf 'vm.swappiness = 100 \nvm.vfs_cache_pressure = 500' >> /mnt/etc/sysctl.d/99-sysctl.conf

# Dbus-broker
systemctl disable dbus.service
systemctl enable dbus-broker.service
systemctl --global enable dbus-broker

# Arch specific tweaks
echo 'en_US.UTF-8 UTF-8' > /mnt/etc/locale.gen
chroot /mnt locale-gen
echo 'ACTION=="add|change", KERNEL=="sd[a-z]", ATTR{queue/rotational}=="0|1", ATTR{queue/scheduler}="bfq"' > /mnt/etc/udev/rules.d/60-ioschedulers.rules

# User account
echo "%wheel ALL=(ALL) NOPASSWD: ALL" > /mnt/etc/sudoers.d/wheel
chroot /mnt useradd -m -g users -G wheel blah
chroot /mnt passwd blah

# NetworkManager
#pacman -S networkmanager
#systemctl enable NetworkManager --root=/mnt
#printf '[connectivity]\nuri=' > /mnt/etc/NetworkManager/conf.d/20-connectivity.conf

# Other
#systemctl mask systemd-homed systemd-userdbd.{service,socket} --root=/mnt
#systemctl mask lvm2-lvmetad.{service,socket} --root=/mnt
