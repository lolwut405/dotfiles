#!/bin/sh
set -x  #echo on

# SELinux enable
dnf install -y selinux-policy-targeted

# Xorg
dnf install -y xorg-x11-server-Xorg dejavu-s* google-croscore-* google-noto-{sans,serif}-fonts 
localectl set-x11-keymap us "" "" caps:escape,terminate:ctrl_alt_bksp

# KDE
dnf install -y plasma-desktop
dnf install -y breeze-gtk kde-settings-pulseaudio kinfocenter kscreen phonon-qt5-backend-gstreamer sddm sddm-breeze 
dnf install -y ark dolphin konsole udisks2 upower
#ksysguard gstreamer1-plugins-good-qt plasma-user-manager pulseaudio-module-gconf qt5-qtimageformats sddm-kcm 
#kolourpaint gwenview plasma-nm
systemctl set-default graphical.target
systemctl disable avahi-daemon

# Typical Apps
dnf install -y git p7zip unzip zip
dnf install -y youtube-dl #firefox mpv
dnf install -y qbittorrent speedcrunch vimiv #notepadqq

# Flatpak
dnf install -y flatpak
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

# Flatpak apps
flatpak install flathub \
org.mozilla.firefox \               #freedesktop platform 19.08
com.georgefb.haruna \               #no platform
org.kde.krita \                     #no platform
com.uploadedlobster.peek            #no platform
com.notepadqq.Notepadqq \           #kde platform 5.11
#org.libreoffice.LibreOffice \      #no platform
#org.remmina.Remmina \              #gnome platform 3.36
#io.github.martinrotter.textosaurus #kde platform 5.12
#org.qbittorrent.qBittorrent \      #kde platform 5.14
#com.github.muriloventuroso.easyssh #no platform
#org.kde.kolourpaint \              #no platform

# Done
rm JvkWH
echo "Done! Reboot now"
echo "NOTE: SELINUX will cause the system to reboot a 2nd time"
