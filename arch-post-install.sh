#!/bin/sh
# run as root
set -x  #echo on

# Gnome
pacman -S --noconfirm xorg-server gnome-shell ttf-croscore ttf-dejavu
pacman -S --noconfirm gdm gnome-control-center gnome-tweaks chrome-gnome-shell
pacman -S --noconfirm eog file-roller gedit gnome-terminal nautilus
systemctl enable gdm

# KDE
#pacman -S --noconfirm xorg-server plasma-desktop ttf-croscore ttf-dejavu
#pacman -S --noconfirm breeze-gtk khotkeys kinfocenter kscreen plasma-pa plasma-nm sddm
#pacman -S --noconfirm ark dolphin kate konsole #gwenview kmix kolourpaint spectacle
#systemctl enable sddm

# Apps
pacman -S --noconfirm p7zip unzip vim youtube-dl zip
pacman -S --noconfirm firefox #chromium 
#pacman -S --noconfirm mpv #AUR: mpv-git
pacman -S --noconfirm galculator transmission-gtk #notepadqq qbittorrent speedcrunch
#pacman -S --noconfirm keepassxc remmina freerdp
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
#kde-gtk-config kdeplasma-addons sddm-kcm user-manager

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
