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
dnf install -y ark dolphin konsole
#ksysguard gstreamer1-plugins-good-qt plasma-user-manager pulseaudio-module-gconf qt5-qtimageformats sddm-kcm 
#kolourpaint gwenview plasma-nm upower udisks2
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
flatpak install -y flathub org.mozilla.firefox           #freedesktop platform 19.08
flatpak install -y flathub com.georgefb.haruna           #no platform
flatpak install -y flathub org.kde.krita                 #no platform
flatpak install -y flathub com.uploadedlobster.peek      #no platform
flatpak install -y flathub org.gnome.Tau                 #no platform
flatpak install -y flathub org.fedoraproject.MediaWriter #no platform
#org.gnome.Boxes                    #no platform
#org.libreoffice.LibreOffice        #no platform
#com.notepadqq.Notepadqq            #kde platform 5.11
#io.github.martinrotter.textosaurus #kde platform 5.12
#org.keepassxc.KeePassXC            #kde platform 5.13
#org.qbittorrent.qBittorrent        #kde platform 5.14
#org.remmina.Remmina                #gnome platform 3.36
#org.kde.kolourpaint                #no platform
#com.github.muriloventuroso.easyssh #no platform

# Laptop
#dnf install -y broadcom-wl
#echo 'set-card-profile 0 output:hdmi-stereo' >> /etc/pulse/default.pa
#https://wiki.archlinux.org/index.php/PulseAudio/Examples#Automatically_switch_audio_to_HDMI

# Done
rm JvkWH
echo "Done! Reboot now"
echo "NOTE: SELINUX will cause the system to reboot a 2nd time"
