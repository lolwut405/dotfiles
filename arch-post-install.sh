#!/bin/sh
set -x  #echo on

# System tweaks
systemctl mask systemd-homed systemd-userdbd.{service,socket}
systemctl mask lvm2-lvmetad.{service,socket}
echo 'ACTION=="add|change", KERNEL=="sd[a-z]", ATTR{queue/rotational}=="0|1", ATTR{queue/scheduler}="bfq"' > /etc/udev/rules.d/60-ioschedulers.rules

# Dbus broker and Earlyoom
pacman -S  --noconfirm dbus-broker earlyoom
systemctl enable dbus-broker earlyoom --now
systemctl --global enable dbus-broker --now

# Zram
pacman -S  --noconfirm systemd-swap
echo 'vm.swappiness = 5' > /etc/sysctl.d/99-sysctl.conf
echo 'vm.vfs_cache_pressure = 50' >> /etc/sysctl.d/99-sysctl.conf
echo 'zswap_enabled=0' > /etc/systemd/swap.conf.d/10-swap.conf
echo 'zram_enabled=1' >> /etc/systemd/swap.conf.d/10-swap.conf
echo 'zram_size=2G' >> /etc/systemd/swap.conf.d/10-swap.conf

# Gnome
pacman -S --noconfirm xorg-server gnome-shell ttf-croscore ttf-dejavu
pacman -S --noconfirm gdm gnome-tweaks chrome-gnome-shell  #gnome-control-center
pacman -S --noconfirm eog file-roller gnome-terminal nemo #nautilus
systemctl enable gdm

# KDE
#pacman -S --noconfirm xorg-server plasma-desktop ttf-croscore ttf-dejavu
#pacman -S --noconfirm breeze-gtk khotkeys kinfocenter kscreen plasma-pa plasma-nm sddm
#pacman -S --noconfirm ark dolphin konsole notepadqq #gwenview kmix kolourpaint spectacle
#systemctl enable sddm

# Typical Apps
pacman -S --noconfirm p7zip unzip vim zip
pacman -S --noconfirm firefox mpv youtube-dl
pacman -S --noconfirm notepadqq qbittorrent speedcrunch vimiv

# Full App
#pacman -S --noconfirm glances keepassxc meld ncdu remmina freerdp libvncserver
#pacman -S --noconfirm virtualbox virtualbox-host-modules-arch

# Openbox
#pacman -S --noconfirm xorg-server openbox xorg-xinit ttf-dejavu
#pacman -S --noconfirm lxappearance-gtk3 lximage-qt lxrandr-gtk3 obconf-qt pcmanfm-qt xarchiver mate-panel #tint2
#pacman -S --noconfirm compton flameshot galculator i3lock lightdm-gtk-greeter rofi sxhkd xterm
#pacman -S --noconfirm alsa-utils papirus-icon-theme pavucontrol pulseaudio-alsa 
#systemctl enable lightdm

# Unused Apps
#alacritty autorandr bash-completion chrony dunst eog fff gsimplecal jnettop kate kitty lf-bin neovim network-manager-applet 
#nitrogen nnn qimgv-git qview peek rclone rsync slock textosaurus tmux udevil volumeicon xautomation xwallpaper lavalauncher 
#kde-gtk-config kdeplasma-addons sddm-kcm user-manager
#broadcom-wl ntfs-3g

# AUR helper
git clone https://bitbucket.org/natemaia/baph.git
cp baph/baph /usr/local/bin
chmod +x /usr/local/bin/baph
rm -rf baph

# AUR Gnome Control Center without cheese...
su - blah -c "baph -inN gnome-control-center-nocheese"

# Dracut
pacman -Sy --noconfirm dracut
echo 'hostonly="yes"' > /etc/dracut.conf.d/myflags.conf
echo 'omit_dracutmodules+="bootchart dash busybox network-legacy network dmsquash-live-ntfs multipath stratis cifs fcoe fcoe-uefi iscsi nbd ssh-client biosdevname btrfs"' >> /etc/dracut.conf.d/myflags.conf
dracut --force /boot/initramfs-linux.img
dracut --force -N /boot/initramfs-linux-fallback.img
su - blah -c "baph -inN dracut-hook"
pacman -Rcs --noconfirm mkinitcpio

# Done
rm fjkRv
echo "Done! Reboot now"
