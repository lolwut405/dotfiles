#!/bin/bash
set -x  #echo on

# Reference: https://glacion.com/2019/06/16/Fedora.html
# Fedora workstation 32 workstation livecd - open terminal, become root
# dd if=/path/to/image.iso of=/dev/sdX bs=8M status=progress oflag=direct

# Partioning. msdos layout. Do lsblk first. cfdisk as an alternative
wipefs -a /dev/sda
parted /dev/sda -- mklabel msdos
parted /dev/sda -- mkpart primary 1Mib 100%
mkfs.xfs /dev/sda1 -f
mount /dev/sda1 /mnt

# Mount temp filesystems (for Dracut and Chroot)
mkdir /mnt/{proc,sys,dev}
mount -t proc /proc /mnt/proc
mount -t sysfs /sys /mnt/sys
mount -o rbind /dev /mnt/dev

# Dracut custom config
mkdir -p /mnt/etc/dracut.conf.d
echo 'hostonly="yes"' >> /mnt/etc/dracut.conf.d/custom.conf

# Install
rm -f /etc/yum.repos.d/*{*test*,*modular*}*
dnf install -y --installroot=/mnt --releasever=32 --nodocs \
@core earlyoom glibc-langpack-en grub2-pc htop kernel wget xfsprogs zram \
https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm \
https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm \
--exclude=firewalld,geolite2-*,gnome-keyring,NetworkManager,openssh-server,plymouth,selinux-*,sssd-*

# Fstab
wget https://github.com/glacion/genfstab/releases/download/1.0/genfstab
chmod +x genfstab
./genfstab -U /mnt >> /mnt/etc/fstab

# Grub
chroot /mnt grub2-install /dev/sda
chroot /mnt grub2-mkconfig -o /boot/grub2/grub.cfg

# Systemd-firstboot
systemd-firstboot --root=/mnt --locale=en_US.UTF-8 --keymap=us --timezone=America/New_York --hostname=fedora --setup-machine-id

# Systemd-networkd
systemctl enable systemd-networkd --root=/mnt
printf '[Match] \nName=en* \n[Network] \nDHCP=ipv4' > /mnt/etc/systemd/network/20-wired.network

# Systemd-resolved
systemctl enable systemd-resolved --root=/mnt
chroot /mnt ln -sf /run/systemd/resolve/stub-resolv.conf /etc/resolv.conf

# Other services
systemctl enable earlyoom --root=/mnt
systemctl enable systemd-timesyncd --root=/mnt
systemctl mask systemd-homed systemd-userdbd.{service,socket} --root=/mnt

# Swap
systemctl enable zram-swap --root=/mnt
printf 'vm.swappiness = 5 \nvm.vfs_cache_pressure = 50' >> /mnt/etc/sysctl.d/99-sysctl.conf

# Neofetch
wget https://raw.githubusercontent.com/lolwut405/dotfiles/master/neofetch -P /mnt/usr/bin
chmod +x /mnt/usr/bin/neofetch

# Fedora specifc config
printf 'install_weak_deps=False \ntsflags=nodocs' >> /mnt/etc/dnf/dnf.conf
rm -f /mnt/etc/yum.repos.d/*{*test*,*modular*}*

# User
setenforce 0  #disable selinux on livecd environment since it interrupts setting pw 
echo "%wheel ALL=(ALL) NOPASSWD: ALL" > /mnt/etc/sudoers.d/wheel
chroot /mnt useradd -m -g users -G wheel blah
chroot /mnt passwd blah

