#!/bin/sh
set -x  #echo on

# KDE
pacman -S --noconfirm xorg-server plasma-desktop ttf-croscore ttf-dejavu noto-fonts
pacman -S --noconfirm ark breeze-gtk dolphin khotkeys konsole kinfocenter kscreen plasma-pa plasma-nm sddm
#gwenview kolourpaint spectacle
systemctl enable sddm

# Gnome
#pacman -S --noconfirm xorg-server gnome-shell ttf-croscore ttf-dejavu
#pacman -S --noconfirm gdm gnome-tweaks chrome-gnome-shell  #gnome-control-center
#pacman -S --noconfirm file-roller gthumb gnome-terminal nemo #eog nautilus
#systemctl enable gdm

# Typical Apps
pacman -S --noconfirm git p7zip unzip vim zip
pacman -S --noconfirm firefox youtube-dl  #mpv
pacman -S --noconfirm notepadqq qbittorrent speedcrunch vimiv

# Full Apps
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

# AUR - Gnome Control Center without cheese...
#su - blah -c "baph -inN gnome-control-center-nocheese"

# AUR - Haruna (QT MPV frontend)
su - blah -c "baph -inN haruna-git"

# Dracut switch from mkinitcpio
pacman -Sy --noconfirm dracut
echo -e 'hostonly="yes" \ncompress="lz4"' >> /etc/dracut.conf.d/custom.conf
dracut --force /boot/initramfs-linux.img
dracut --force -N /boot/initramfs-linux-fallback.img
su - blah -c "baph -inN dracut-hook"
pacman -Rcs --noconfirm mkinitcpio

# Done
rm fjkRv
echo "Done! Reboot now"

# Earlyoom
#pacman -S  --noconfirm earlyoom
#systemctl enable db earlyoom --now
