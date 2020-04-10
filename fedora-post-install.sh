#!/bin/sh
set -x  #echo on

# SELinux enable
dnf install -y selinux-policy-targeted

# Xorg
dnf install -y xorg-x11-server-Xorg dejavu-s* google-croscore-* google-noto-{sans,serif}-fonts 

# Gnome
dnf install -y gnome-shell gnome-terminal nautilus
systemctl set-default graphical.target

# KDE
#dnf install -y plasma-desktop
#dnf install -y breeze-gtk kde-settings-pulseaudio kinfocenter kscreen phonon-qt5-backend-gstreamer sddm sddm-breeze udisks2 upower
#dnf install -y ark dolphin konsole 
#ksysguard gstreamer1-plugins-good-qt plasma-user-manager pulseaudio-module-gconf qt5-qtimageformats sddm-kcm 
#kolourpaint gwenview plasma-nm
#systemctl set-default graphical.target
#systemctl disable avahi-daemon
#localectl set-x11-keymap us "" "" caps:escape,terminate:ctrl_alt_bksp

# Typical Apps
dnf install -y git p7zip unzip zip
dnf install -y youtube-dl #firefox mpv
dnf install -y keepassxc qbittorrent speedcrunch #qimgv
#meld ncdu remmina freerdp libvncserver virtualbox

# Flatpak
dnf install -y flatpak
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

# Flatpak apps
## SEE ARCH POST INSTALL ##

# Laptop
#dnf install -y broadcom-wl
#echo 'set-card-profile 0 output:hdmi-stereo' >> /etc/pulse/default.pa
#https://wiki.archlinux.org/index.php/Iwd
#dnf install -y NetworkManager NetworkManager-wifi plasma-nm
#systemctl disable systemd-networkd
#systemctl enable NetworkManager

# Done
rm JvkWH
echo "Done! Reboot now"
echo "NOTE: SELINUX will cause the system to reboot a 2nd time"
