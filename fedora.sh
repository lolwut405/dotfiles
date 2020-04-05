#!/bin/bash
set -x  #echo on

# Reference: https://glacion.com/2019/06/16/Fedora.html
# Fedora workstation 32 workstation livecd - open terminal, become root

# Partition (do lsblk first. cfdisk if need done manually)
wipefs -a /dev/sda
parted /dev/sda -- mklabel msdos
parted /dev/sda -- mkpart primary 1Mib 100%
mkfs.xfs /dev/sda1
mount /dev/sda1 /mnt

# Mount temp filesystems
mkdir /mnt/{proc,sys,dev}
mount -t proc proc /mnt/proc
mount -t sysfs sys /mnt/sys
mount -o rbind /dev /mnt/dev

# Dracut custom config
mkdir -p /mnt/etc/dracut.conf.d
echo -e 'hostonly="yes" \ncompress="pigz"' >> /mnt/etc/dracut.conf.d/custom.conf

# Install
dnf --installroot=/mnt --releasever=32 --setopt=install_weak_deps=False --nodocs -y install \
dracut glibc-langpack-en kernel rootfiles systemd systemd-udev  \
audit dnf grub2 kbd less iproute iputils passwd pigz sudo xfsprogs \
htop neofetch vim-minimal zram

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
cat <<EOF > /mnt/etc/systemd/network/20-wired.network
[Match]
Name=en*
[Network]
DHCP=ipv4
EOF

# Systemd-resolved - https://www.ctrl.blog/entry/systemd-resolved.html
systemctl enable systemd-resolved --root=/mnt
chroot /mnt ln -sf /run/systemd/resolve/stub-resolv.conf /etc/resolv.conf
cat <<EOF >> /mnt/etc/systemd/resolved.conf
DNS=9.9.9.9
FallbackDNS=149.112.112.112
DNSOverTLS=opportunistic
DNSSEC=true
EOF

# Other services
systemctl enable systemd-timesyncd --root=/mnt
systemctl mask systemd-homed systemd-userdbd.{service,socket} --root=/mnt

# Swap
echo 'vm.swappiness = 5 \nvm.vfs_cache_pressure = 50' >> /mnt/etc/sysctl.d/99-sysctl.conf
echo 'zswap_enabled=0 \nzram_enabled=1 \nzram_size=1G' >> /mnt/etc/systemd/swap.conf.d/10-swap.conf

# Fedora specifc config
echo -n  'install_weak_deps=False \ntsflags=nodocs' >> /mnt/etc/dnf/dnf.conf

# User
echo "%wheel ALL=(ALL) NOPASSWD: ALL" > /mnt/etc/sudoers.d/wheel
setenforce 0  #disable selinux since interrupts setting pw 
chroot /mnt useradd -m -g users -G wheel blah
chroot /mnt passwd blah  #ignore dictionary check error
