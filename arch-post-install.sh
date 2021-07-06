#!/bin/sh
set -x  #echo on

# Xorg/Fonts
pacman -S --noconfirm xorg-server ttf-croscore ttf-dejavu noto-fonts

# KDE
pacman -S --noconfirm plasma-desktop sddm
pacman -S --noconfirm ark dolphin khotkeys konsole kscreen gwenview powerdevil speedcrunch plasma-pa 
systemctl enable sddm

# Gnome
#pacman -S --noconfirm gnome-shell gdm
#pacman -S --noconfirm file-roller gnome-calculator gnome-terminal gnome-tweaks gthumb pcmanfm-gtk3 #nemo tilix
#pacman -S --noconfirm gnome-control-center
#pacman -S --noconfirm chrome-gnome-shell
#systemctl enable gdm

# Typical Apps
pacman -S --noconfirm git p7zip unzip zip 
pacman -S --noconfirm firefox geany mpv youtube-dl
pacman -S --noconfirm keepassxc qbittorrent
#pacman -S --noconfirm meld ncdu nnn 
#pacman -S --noconfirm remmina freerdp #libvncserver
#galculator #virtualbox virtualbox-host-modules-arch

# AUR helper
git clone https://bitbucket.org/natemaia/baph.git
cd baph; make install; cd ../; rm -rf baph

# Gnome AUR packages
#su - blah -c "baph -inN gnome-control-center-nocheese"
#xrdp

# KDE AUR packages
#su - blah -c "baph -inN ksnip"

# Experimental 
echo 'export FREETYPE_PROPERTIES="truetype:interpreter-version=36"' >> /etc/profile.d/freetype2.sh

# Additional user
#useradd -m -g users -G users guest
#passwd guest

# Laptop wifi
#pacman -S --noconfirm broadcom-wl

# Done
echo "Done! Reboot now. Remove this file"

######
#breeze-gtk kde-gtk-config kdeplasma-addons kinfocenter kolourpaint plasma-nm sddm-kcm user-manager

# Openbox
#pacman -S --noconfirm xorg-server openbox xorg-xinit ttf-dejavu
#pacman -S --noconfirm lxappearance-gtk3 lximage-qt lxrandr-gtk3 obconf-qt pcmanfm-qt xarchiver mate-panel #tint2
#pacman -S --noconfirm compton flameshot galculator i3lock lightdm-gtk-greeter rofi sxhkd xterm #sakura
#pacman -S --noconfirm alsa-utils papirus-icon-theme pavucontrol pulseaudio-alsa 
#systemctl enable lightdm

# Unused Apps
#alacritty autorandr bash-completion chrony dunst eog fff gsimplecal jnettop glances kate kitty lf-bin neovim network-manager-applet 
#nitrogen nnn qimgv-git qview peek rclone rsync sakura slock tmux udevil volumeicon xautomation xwallpaper lavalauncher 

# Laptop audio
#sed -i "s/load-module module-switch-on-port-available/#load-module module-switch-on-port-available/" /etc/pulse/default.pa
