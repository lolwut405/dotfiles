#!/bin/sh
set -x  #echo on

# Xorg/Fonts
pacman -S --noconfirm xorg-server ttf-croscore ttf-dejavu noto-fonts

# Gnome
pacman -S --noconfirm gnome-shell gdm
pacman -S --noconfirm file-roller gnome-tweaks gthumb nemo tilix
#chrome-gnome-shell gnome-control-center gnome-terminal nautilus
systemctl enable gdm

# KDE
#pacman -S --noconfirm plasma-desktop sddm
#pacman -S --noconfirm ark breeze-gtk dolphin khotkeys kinfocenter konsole kscreen plasma-pa 
#gwenview kolourpaint plasma-nm spectacle
#systemctl enable sddm

# Typical Apps
pacman -S --noconfirm git p7zip unzip zip youtube-dl
#firefox keepassxc mpv qbittorrent speedcrunch
#meld ncdu remmina freerdp libvncserver virtualbox virtualbox-host-modules-arch

# Flatpak
pacman -S --noconfirm flatpak  #gnome-software
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

# Flatpak apps - Typical
flatpak install -y flathub org.mozilla.firefox  #dblcheck video performance
flatpak install -y flathub org.gnome.Calculator   
flatpak install -y flathub org.gnome.meld
flatpak install -y flathub org.gnome.Tau
flatpak install -y flathub org.kde.kolourpaint
flatpak install -y flathub org.keepassxc.KeePassXC
flatpak install -y flathub org.qbittorrent.qBittorrent
flatpak install -y flathub org.remmina.Remmina
flatpak install -y flathub org.fedoraproject.MediaWriter
flatpak install -y flathub io.github.celluloid_player.Celluloid

# Flatpak apps - large
#flatpak install flathub com.valvesoftware.Steam
#flatpak install flathub com.visualstudio.code
#flatpak install flathub org.libreoffice.LibreOffice
#flatpak install flathub org.libretro.RetroArch
#flatpak install flathub org.kde.krita

# Flatpak apps - unused currently
#flatpak install flathub org.gnome.Geary                  #gtk. email client
#flatpak install flathub com.georgefb.haruna              #qt. mpv frontend
#flatpak install flathub org.mozilla.Thunderbird.         #gtk. email
#flatpak install flathub com.transmissionbt.Transmission  #gtk. qbittorrent better
#flatpak install flathub org.gnome.Boxes                  #gtk. kvm is better, but prefer virtualbox
#flatpak install flathub org.speedcrunch.SpeedCrunch      #qt. gnome calculator slightly better
#flatpak install flathub com.uploadedlobster.peek         #x11 Screen recorder
#flatpak install flathubcom.obsproject.Studio             #X11 Screen recorder
#flatpak install flathub com.notepadqq.Notepadqq       #qt. test editor

# AUR helper
git clone https://bitbucket.org/natemaia/baph.git
cd baph; make install; cd ../; rm -rf baph

# AUR - Gnome AUR
su - blah -c "baph -inN gnome-control-center-nocheese "
#qtfm nautilus-typeahead haruna-git tau-editor qimgv"

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

# Laptop wifi
#pacman -S broadcom-wl iwd
#systemctl enable iwd
#cat <<EOF > /mnt/etc/systemd/network/25-wireless.network
#[Match]
#Name=wl*
#[Network]
#DHCP=ipv4
#EOF
#iwctl --passphrase passphrase station device connect SSID

# Laptop audio
#sed -i "s/load-module module-switch-on-port-available/#load-module module-switch-on-port-available/" /etc/pulse/default.pa

# Done
rm fjkRv
echo "Done! Reboot now"

######
# Openbox
#pacman -S --noconfirm xorg-server openbox xorg-xinit ttf-dejavu
#pacman -S --noconfirm lxappearance-gtk3 lximage-qt lxrandr-gtk3 obconf-qt pcmanfm-qt xarchiver mate-panel #tint2
#pacman -S --noconfirm compton flameshot galculator i3lock lightdm-gtk-greeter rofi sxhkd xterm #sakura
#pacman -S --noconfirm alsa-utils papirus-icon-theme pavucontrol pulseaudio-alsa 
#systemctl enable lightdm

# Unused Apps
#alacritty autorandr bash-completion chrony dunst eog fff gsimplecal jnettop glances kate kitty lf-bin neovim network-manager-applet 
#nitrogen nnn qimgv-git qview peek rclone rsync sakura slock textosaurus tmux udevil volumeicon xautomation xwallpaper lavalauncher 
#kde-gtk-config kdeplasma-addons sddm-kcm user-manager

# AUR helper
#git clone https://bitbucket.org/natemaia/baph.git
#cp baph/baph /usr/local/bin
#chmod +x /usr/local/bin/baph
#rm -rf baph
