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
dnf install -y ark dolphin konsole upower
#ksysguard gstreamer1-plugins-good-qt plasma-user-manager pulseaudio-module-gconf qt5-qtimageformats sddm-kcm 
#kolourpaint gwenview udisks2 plasma-nm
systemctl set-default graphical.target
systemctl disable avahi-daemon

# Typical Apps
dnf install -y git p7zip unzip zip
dnf install -y firefox mpv youtube-dl
dnf install -y notepadqq qbittorrent speedcrunch vimiv

# Done
rm JvkWH
echo "Done! Reboot now"
echo "NOTE: SELINUX will cause the system to reboot a 2nd time"