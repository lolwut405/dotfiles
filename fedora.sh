# Partition
parted /dev/sda -- mklabel msdos
parted /dev/sda -- mkpart primary 1Mib 100%
mkfs.xfs /dev/sda1
mount /dev/sda1 /mnt

# Install
dnf --installroot=/mnt --releasever=32 --setopt=install_weak_deps=False --nodocs -y install \
glibc-langpack-en kernel rootfiles systemd systemd-udev  \
audit dnf grub2 kbd less iproute iputils passwd pigz sudo xfsprogs \
htop neofetch vim-minimal

# Fstab
wget https://github.com/glacion/genfstab/releases/download/1.0/genfstab
chmod +x genfstab
./genfstab -U /mnt >> /mnt/etc/fstab

# Mount temp filesystems
mount -t proc proc /mnt/proc
mount -t sysfs sys /mnt/sys
mount -o rbind /dev /mnt/dev

# Mandatory config
systemd-firstboot --root=/mnt --locale=en_US.UTF-8 --keymap=us --timezone=America/New_York --hostname=fedora --setup-machine-id

# Dracut
echo -e 'hostonly="yes" \ncompress="pigz"' >> /mnt/etc/dracut.conf.d/custom.conf
chroot /mnt dracut --regenerate-all -f

# Grub
chroot /mnt grub2-install /dev/sda
chroot /mnt grub2-mkconfig -o /boot/grub2/grub.cfg

# Services
systemctl enable systemd-timesyncd --root=/mnt
systemctl mask systemd-homed systemd-userdbd.{service,socket} --root=/mnt

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

# Optional config
echo "%wheel ALL=(ALL) NOPASSWD: ALL" > /mnt/etc/sudoers.d/wheel
echo -n  'install_weak_deps=False \ntsflags=nodocs' >> /mnt/etc/dnf/dnf.conf

# User account
setenforce 0  #disable selinux since interrupts setting pw 
chroot /mnt useradd -m -g users -G wheel blah
chroot /mnt passwd blah  #ignore dictionary check error
