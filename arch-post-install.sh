#!/bin/bash
# run as root
set -x  #echo on

# Gnome
pacman -S --noconfirm xorg-server gnome-shell 
pacman -S --noconfirm gdm gnome-control-center gnome-tweaks ttf-croscore
pacman -S --noconfirm eog file-roller gedit gnome-terminal nautilus 
pacman -S --noconfirm chrome-gnome-shell
systemctl enable gdm

# KDE
#pacman -S --noconfirm xorg-server plasma-desktop
#pacman -S --noconfirm breeze-gtk khotkeys kinfocenter kscreen plasma-pa plasma-nm sddm ttf-croscore  #kmix
#kde-gtk-config kdeplasma-addons sddm-kcm user-manager
#pacman -S --noconfirm ark dolphin kate konsole ttf-croscore  #gwenview kolourpaint notepadqq spectacle
#systemctl enable sddm

# Apps
pacman -S --noconfirm p7zip unzip vim zip
pacman -S --noconfirm firefox mpv qbittorrent speedcrunch youtube-dl  #galculator notepadqq
pacman -S --noconfirm keepassxc remmina freerdp
#chromium meld thunderbird virtualbox virtualbox-host-modules-arch

# Openbox
#pacman -S --noconfirm xorg-server openbox xorg-xinit ttf-dejavu
#pacman -S --noconfirm lxappearance-gtk3 lximage-qt lxrandr-gtk3 obconf-qt pcmanfm-qt xarchiver mate-panel #tint2
#pacman -S --noconfirm compton flameshot galculator i3lock lightdm-gtk-greeter rofi sxhkd xterm
#pacman -S --noconfirm alsa-utils papirus-icon-theme pavucontrol pulseaudio-alsa ttf-fira-sans
#systemctl enable lightdm
 
# Unused Apps
#alacritty arqiver-git autorandr bash-completion chrony dunst eog fff glances gsimplecal jnettop kate kitty lf-bin neovim
#network-manager-applet nitrogen nnn notepadqq qimgv-git qt5ct qview peek rclone rsync slock textosaurus tmux     
#udevil volumeicon xautomation xwallpaper lavalauncher

# LAPTOP
#pacman -S --noconfirm broadcom-wl ntfs-3g

# AUR helper
git clone https://bitbucket.org/natemaia/baph.git
cp baph/baph /usr/local/bin
chmod +x /usr/local/bin/baph
rm -rf baph

# AUR Apps
su - blah -c "baph -inN ytop-bin zramswap"  #vimiv-qt gscreenshot
systemctl enable zramswap

# Done
rm fjkRv
echo "Done! Reboot now"
