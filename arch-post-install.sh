#!/bin/sh
set -x  #echo on

# Xorg/Fonts
pacman -S --noconfirm xorg-server ttf-croscore ttf-dejavu noto-fonts

# Gnome
pacman -S --noconfirm gnome-shell gdm gnome-terminal nautilus
pacman -S --noconfirm file-roller gnome-tweaks gthumb
#gnome-control-center chrome-gnome-shell eog
systemctl enable gdm

# Gnome custom
wget https://git.archlinux.org/svntogit/packages.git/plain/trunk/PKGBUILD?h=packages/gnome-control-center -O pkgbuild

# KDE
#pacman -S --noconfirm plasma-desktop dolphin konsole sddm
#pacman -S --noconfirm ark breeze-gtk khotkeys kinfocenter kscreen plasma-pa 
#gwenview kolourpaint plasma-nm spectacle
#systemctl enable sddm

# Typical Apps
pacman -S --noconfirm git p7zip unzip vim zip
pacman -S --noconfirm keepassxc qbittorrent speedcrunch youtube-dl 
#firefox mpv meld ncdu remmina freerdp libvncserver virtualbox virtualbox-host-modules-arch

# Flatpak
pacman -S --noconfirm flatpak
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

# Flatpak apps
flatpak install -y flathub org.mozilla.firefox           #freedesktop platform 19.08
flatpak install -y flathub com.georgefb.haruna           #kde platform. MPV qt frontend
flatpak install -y flathub org.gnome.Tau                 #no platform. Similar to npqq/geany
flatpak install -y flathub org.kde.krita                 #no platform. Image editor
#com.uploadedlobster.peek             #no platform. Screen recorder
#org.fedoraproject.MediaWriter        #no platform. Similiar to Etcher
#org.libreoffice.LibreOffice          #no platform
#org.gnome.Boxes                      #no platform. Virtualization
#com.notepadqq.Notepadqq              #kde platform 5.11
#io.github.martinrotter.textosaurus   #kde platform 5.12
#org.keepassxc.KeePassXC              #kde platform 5.13
#org.qbittorrent.qBittorrent          #kde platform 5.14
#org.remmina.Remmina                  #gnome platform 3.36
#org.kde.kolourpaint                  #no platform
#com.github.muriloventuroso.easyssh   #no platform

# AUR helper
git clone https://bitbucket.org/natemaia/baph.git
cp baph/baph /usr/local/bin
chmod +x /usr/local/bin/baph
rm -rf baph

# AUR - Gnome AUR
su - blah -c "baph -inN gnome-control-center-nocheese nautilus-typeahead"
#su - blah -c "baph -inN haruna-git tau-editor qimgv"

# Dracut switch from mkinitcpio
pacman -Sy --noconfirm dracut
echo -e 'hostonly="yes" \ncompress="lz4"' >> /etc/dracut.conf.d/custom.conf
dracut --force /boot/initramfs-linux.img
dracut --force -N /boot/initramfs-linux-fallback.img
su - blah -c "baph -inN dracut-hook"
pacman -Rcs --noconfirm mkinitcpio

# Experimental
echo 'export FREETYPE_PROPERTIES="truetype:interpreter-version=36"' >> /etc/profile.d/freetype2.sh
#vnc set-up

# Additional user
#useradd -m -g users -G guest
#passwd guest

# Laptop only
#pacman -S broadcom-wl networkmanager
#systemctl disable systemd-networkd
#systemctl enable NetworkManager

# Done
rm fjkRv
echo "Done! Reboot now"

######
# Openbox
#pacman -S --noconfirm xorg-server openbox xorg-xinit ttf-dejavu
#pacman -S --noconfirm lxappearance-gtk3 lximage-qt lxrandr-gtk3 obconf-qt pcmanfm-qt xarchiver mate-panel #tint2
#pacman -S --noconfirm compton flameshot galculator i3lock lightdm-gtk-greeter rofi sxhkd xterm
#pacman -S --noconfirm alsa-utils papirus-icon-theme pavucontrol pulseaudio-alsa 
#systemctl enable lightdm

# Unused Apps
#alacritty autorandr bash-completion chrony dunst eog fff gsimplecal jnettop glances kate kitty lf-bin neovim network-manager-applet 
#nitrogen nnn qimgv-git qview peek rclone rsync slock textosaurus tmux udevil volumeicon xautomation xwallpaper lavalauncher 
#kde-gtk-config kdeplasma-addons sddm-kcm user-manager
