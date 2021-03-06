#!/bin/sh
set -x  #echo on

# Fedora only. SELinux enable
dnf install -y selinux-policy-targeted

# Xorg/Fonts
dnf install -y xorg-x11-server-Xorg dejavu-s* google-croscore-* google-noto-{sans,serif}-fonts 

# Gnome
dnf install -y gnome-shell gnome-terminal nautilus
systemctl set-default graphical.target

# KDE
#dnf install -y plasma-desktop dolphin konsole sddm sddm-breeze
#dnf install -y ark breeze-gtk kde-settings-pulseaudio kinfocenter kscreen phonon-qt5-backend-gstreamer udisks2 upower 
#gwenview kolourpaint plasma-nm gstreamer1-plugins-good-qt plasma-user-manager pulseaudio-module-gconf sddm-kcm 
#systemctl set-default graphical.target
#systemctl disable avahi-daemon

# Typical Apps
dnf install -y git p7zip unzip zip
dnf install -y keepassxc qbittorrent speedcrunch youtube-dl
#firefox mpv qimgv meld ncdu remmina freerdp libvncserver virtualbox

# Flatpak
dnf install -y flatpak
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

# Flatpak apps
## SEE ARCH POST INSTALL ##

# Additional user
#useradd -m -g users -G guest
#passwd guest

# Laptop only
#dnf install -y broadcom-wl
#echo 'set-card-profile 0 output:hdmi-stereo' >> /etc/pulse/default.pa
#https://wiki.archlinux.org/index.php/Iwd
#dnf install -y NetworkManager NetworkManager-wifi plasma-nm
#systemctl disable systemd-networkd
#systemctl enable NetworkManager

# Done
#rm JvkWH
echo "Done! Reboot now"
echo "NOTE: SELINUX will cause the system to reboot a 2nd time"

# Fedora Gnome only
#systemctl --user mask evolution-addressbook-factory evolution-calendar-factory evolution-source-registry
#cp /etc/xdg/autostart/org.gnome.Evolution-alarm-notify.desktop ./  #Fedora only
#sudo systemctl mask switcheroo-control --now
#sudo chmod -x /bin/ibus-daemon
