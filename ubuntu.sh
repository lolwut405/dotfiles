#!/bin/sh
set -x  #echo on

# Ubuntu Focal - mini.iso - 1 partition ext4 only
# http://archive.ubuntu.com/ubuntu/dists/focal/main/installer-amd64/current/images/netboot/mini.iso

# Apt
apt update -y; apt upgrade -y
echo 'APT::Install-Recommends "0";' > /etc/apt/apt.conf.d/00recommends
apt install -y htop neofetch

# System tweaks
systemctl disable accounts-daemon cron networkd-dispatcher rsyslog --now
echo "%sudo ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/sudo
echo -e 'vm.swappiness = 5 \nvm.vfs_cache_pressure = 50' >> /etc/sysctl.d/99-sysctl.conf
sed -i 's/.*motd/#&/' /etc/pam.d/login

# KDE
apt install -y xserver-xorg kde-plasma-desktop fonts-dejavu-core fonts-croscore fonts-noto-core 
apt install -y ark breeze-gtk-theme khotkeys kinfocenter kscreen kwin-x11 sddm plasma-pa systemsettings 
#kde-config-gtk-style kde-config-screenlocker kmenuedit ksysguard kwin-addons plasma-nm powerdevil
systemctl set-default graphical.target

# Typical Apps
apt install -y git p7zip unzip zip
apt install -y firefox mpv 
apt install -y notepadqq qbittorrent speedcrunch

# Full Apps
#apt install -y glances keepassxc meld ncdu remmina
