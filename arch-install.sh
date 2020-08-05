#!/bin/bash
set -x  #echo on

# Partioning. msdos layout. Do lsblk first. cfdisk as an alternative
# dd if=/path/to/image.iso of=/dev/sdX bs=8M status=progress oflag=direct
wipefs -a /dev/sda
parted /dev/sda -- mklabel msdos
parted /dev/sda -- mkpart primary 1Mib 100%
mkfs.xfs /dev/sda1 -f
#mkfs.btrfs /dev/sda1 -f
mount /dev/sda1 /mnt

# Install
#echo "Server = http://mirrors.acm.wpi.edu/archlinux/\$repo/os/\$arch" > /etc/pacman.d/mirrorlist
#echo "Server = http://mirror.wdc1.us.leaseweb.net/archlinux/\$repo/os/\$arch" > /etc/pacman.d/mirrorlist
#echo "Server = http://mirrors.advancedhosters.com/archlinux/\$repo/os/\$arch" >> /etc/pacman.d/mirrorlist
curl -o /etc/pacman.d/mirrorlist "https://www.archlinux.org/mirrorlist/?country=US&protocol=http"
sed -i 's/#Server/Server/g' /etc/pacman.d/mirrorlist
#pacman -Syy
pacman -S archlinux-keyring --noconfirm
pacstrap /mnt base base-devel linux linux-firmware grub htop openssh sudo vi vim wget xfsprogs earlyoom networkmanager systemd-swap dbus-broker
genfstab -U /mnt >> /mnt/etc/fstab

# Grub
mount -t proc /proc /mnt/proc
mount -t sysfs /sys /mnt/sys
mount -o rbind /dev /mnt/dev
chroot /mnt grub-install /dev/sda
chroot /mnt grub-mkconfig -o /boot/grub/grub.cfg

# Systemd-firstboot
systemd-firstboot --root=/mnt --locale=en_US.UTF-8 --keymap=us --timezone=America/New_York --hostname=arch --setup-machine-id

# NetworkManager
systemctl enable networkmanager --root=/mnt
printf '[connectivity]\nuri=' > /mnt/etc/NetworkManager/conf.d/20-connectivity.conf

# Other services
systemctl enable earlyoom --root=/mnt
systemctl enable systemd-timesyncd --root=/mnt
#systemctl mask systemd-homed systemd-userdbd.{service,socket} --root=/mnt

# Swap
systemctl enable systemd-swap --root=/mnt
printf 'vm.swappiness = 5 \nvm.vfs_cache_pressure = 50' >> /mnt/etc/sysctl.d/99-sysctl.conf
printf 'zswap_enabled=0 \nzram_enabled=1 \nzram_size=1G' >> /mnt/etc/systemd/swap.conf.d/10-swap.conf

# Arch specific tweaks
echo 'en_US.UTF-8 UTF-8' > /mnt/etc/locale.gen
chroot /mnt locale-gen
systemctl mask lvm2-lvmetad.{service,socket} --root=/mnt
echo 'ACTION=="add|change", KERNEL=="sd[a-z]", ATTR{queue/rotational}=="0|1", ATTR{queue/scheduler}="bfq"' > /mnt/etc/udev/rules.d/60-ioschedulers.rules
#systemctl enable dbus-broker --root=/mnt
#systemctl --global enable dbus-broker --root=/mnt

# User account
echo "%wheel ALL=(ALL) NOPASSWD: ALL" > /mnt/etc/sudoers.d/wheel
chroot /mnt useradd -m -g users -G wheel blah
chroot /mnt passwd blah
