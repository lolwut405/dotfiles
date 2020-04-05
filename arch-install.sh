#!/bin/bash
set -x  #echo on

# Partition (do lsblk first. cfdisk if need done manually)
wipefs -a /dev/sda
parted /dev/sda -- mklabel msdos
parted /dev/sda -- mkpart primary 1Mib 100%
mkfs.xfs /dev/sda1
mount /dev/sda1 /mnt

# Install
echo "Server = http://mirrors.advancedhosters.com/archlinux/\$repo/os/\$arch" > /etc/pacman.d/mirrorlist
echo "Server = http://mirror.wdc1.us.leaseweb.net/archlinux/\$repo/os/\$arch" >> /etc/pacman.d/mirrorlist
pacstrap /mnt base base-devel linux linux-firmware grub git htop neofetch openssh sudo vi vim wget xfsprogs dbus-broker systemd-swap #dhclient networkmanager chrony

# Fstab
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
systemctl enable systemd-swap --root=/mnt
echo 'vm.swappiness = 5 \nvm.vfs_cache_pressure = 50' >> /mnt/etc/sysctl.d/99-sysctl.conf
echo 'zswap_enabled=0 \nzram_enabled=1 \nzram_size=1G' >> /mnt/etc/systemd/swap.conf.d/10-swap.conf

# Arch specific tweaks
systemctl enable dbus-broker --root=/mnt
systemctl --global enable dbus-broker --root=/mnt
systemctl mask lvm2-lvmetad.{service,socket} --root=/mnt
echo 'ACTION=="add|change", KERNEL=="sd[a-z]", ATTR{queue/rotational}=="0|1", ATTR{queue/scheduler}="bfq"' > /mnt/etc/udev/rules.d/60-ioschedulers.rules

# User account
echo "%wheel ALL=(ALL) NOPASSWD: ALL" > /mnt/etc/sudoers.d/wheel
chroot /mnt useradd -m -g users -G wheel blah
chroot /mnt passwd blah

#######
# Config
echo 'en_US.UTF-8 UTF-8' > /mnt/etc/locale.gen
chroot /mnt locale-gen
#echo vm > /mnt/etc/hostname  #desktop/laptop
#chroot /mnt hwclock --systohc --utc
#chroot /mnt ln -sf /usr/share/zoneinfo/America/New_York /etc/localtime
#export LANG=en_US.UTF-8
#echo LANG=$LANG > /mnt/etc/locale.conf
#echo $LANG UTF-8 > /mnt/etc/locale.gen
#chroot /mnt locale-gen

# NTP
#chroot /mnt systemctl enable chronyd
#sed -i "s/! server/server/" /mnt/etc/chrony.conf

# Network
#chroot /mnt systemctl enable NetworkManager
#echo -e '[connectivity]\nuri=' > /mnt/etc/NetworkManager/conf.d/20-connectivity.conf
