#!/bin/sh
set -x  #echo on

# Xorg/Fonts
pacman -S --noconfirm xorg-server ttf-croscore ttf-dejavu noto-fonts

# Gnome
pacman -S --noconfirm gnome-shell gdm
pacman -S --noconfirm chrome-gnome-shell file-roller gedit gnome-calculator gnome-tweaks gthumb tilix #nemo
systemctl enable gdm

# KDE
#pacman -S --noconfirm plasma-desktop sddm
#pacman -S --noconfirm ark breeze-gtk dolphin khotkeys kinfocenter konsole kscreen plasma-pa 
#gwenview kolourpaint plasma-nm spectacle
#systemctl enable sddm

# Typical Apps
pacman -S --noconfirm git p7zip unzip zip 
pacman -S --noconfirm firefox mpv youtube-dl #galculator
pacman -S --noconfirm keepassxc qbittorrent
pacman -S --noconfirm meld ncdu remmina freerdp libvncserver
#galculator #virtualbox virtualbox-host-modules-arch

# Flatpak
#pacman -S --noconfirm flatpak
#flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

# Freedesktop Platform
###flatpak install -y https://flathub.org/beta-repo/appstream/org.mozilla.firefox.flatpakref
###flatpak override --socket=wayland org.mozilla.firefox
###flatpak override --env=MOZ_ENABLE_WAYLAND=1 org.mozilla.firefox
###flatpak install flathub org.mozilla.firefox
###flatpak install flathub io.atom.Atom  #see github atom config

# Gnome 3.36 Platform
#flatpak install -y flathub org.gnome.calculator
#flatpak install -y flathub org.gnome.meld
#flatpak install -y flathub org.remmina.Remmina
#flatpak install -y flathub io.github.celluloid_player.Celluloid

# KDE 5.14 Platform
#flatpak install -y flathub org.kde.dolphin
#flatpak install -y flathub org.keepassxc.KeePassXC
#flatpak install -y flathub org.nomacs.ImageLounge  #disable smooth scroll
#flatpak install -y flathub org.qbittorrent.qBittorrent
###flatpak install flathub org.kde.kolourpaint
###flatpak install flathub org.fedoraproject.MediaWriter

# Flatpak apps - large
#flatpak install flathub com.valvesoftware.Steam
#flatpak install flathub com.visualstudio.code
#flatpak install flathub org.libreoffice.LibreOffice
#flatpak install flathub org.libretro.RetroArch
#flatpak install flathub org.kde.krita

# Flatpak apps - unused currently
#flatpak install flathub org.gnome.gedit                  #gtk. text editor
#flatpak install flathub org.gnome.Geary                  #gtk. email client
#flatpak install flathub org.gnome.Tau                    #gtk. text editor
#flatpak install flathub com.georgefb.haruna              #qt. mpv frontend
#flatpak install flathub org.kde.kate                     #qt. text edito
#flatpak install flathub org.mozilla.Thunderbird          #gtk. email
#flatpak install flathub org.gnome.Boxes                  #gtk. kvm is better, but prefer virtualbox
#flatpak install flathub org.speedcrunch.SpeedCrunch      #qt. gnome calculator slightly better
#flatpak install flathub com.uploadedlobster.peek         #x11 Screen recorder
#flatpak install flathubcom.obsproject.Studio             #X11 Screen recorder
#flatpak install flathub com.notepadqq.Notepadqq
#flatpak install -y flathub com.transmissionbt.Transmission
#flatpak install flathub org.kde.okular
#flatpak install flathub com.github.tchx84.Flatseal

# AUR helper
git clone https://bitbucket.org/natemaia/baph.git
cd baph; make install; cd ../; rm -rf baph

# Gnome AUR packages
#su - blah -c "baph -inN gnome-control-center-nocheese"

# Experimental #VNC 
echo 'export FREETYPE_PROPERTIES="truetype:interpreter-version=36"' >> /etc/profile.d/freetype2.sh

# Additional user
#useradd -m -g users -G users guest
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
#rm fjkRv
echo "Done! Reboot now"

######
# Dracut switch
#pacman -Sy --noconfirm dracut
#echo -e 'hostonly="yes" \ncompress="lz4"' >> /etc/dracut.conf.d/custom.conf
#dracut --force /boot/initramfs-linux.img
#dracut --force -N /boot/initramfs-linux-fallback.img
#su - blah -c "baph -inN dracut-hook"

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

# Firefox bin
#curl -L -o firefox-latest-linux64.tar.bz2 "https://download.mozilla.org/?product=firefox-latest&os=linux64&lang=en-US" 
#tar -xvf firefox-latest-linux64.tar.bz2 -C /opt/
#chown -R root:users /opt/firefox
#chmod 750 /opt/firefox
#curl -L -o /usr/share/applications/firefox.desktop "https://git.io/JfeZ1"
#ln -sf /opt/firefox/firefox /usr/bin/firefox
#rm firefox-latest-linux64.tar.bz2
