#!/bin/sh
set -x  #echo on

# Ubuntu Focal - mini.iso - http://archive.ubuntu.com/ubuntu/dists/focal/main/installer-amd64/current/images/netboot/mini.iso
# 1 Partition

# Apt
apt update -y; apt upgrade -y
echo 'APT::Install-Recommends "0";' > /etc/apt/apt.conf.d/00recommends

# System tweaks
systemctl disable accounts-daemon cron networkd-dispatcher rsyslog --now
echo "%sudo ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/sudo
echo 'vm.swappiness = 10' > /etc/sysctl.d/99-sysctl.conf
chmod -x /etc/update-motd.d/*
apt install -y htop neofetch

# Xorg
apt install -y xserver-xorg xinit fonts-dejavu-core fonts-noto-core

# KDE
apt install -y kde-plasma-desktop 
apt install -y khotkeys kmenuedit kinfocenter kscreen kwin-x11 kwin-addons sddm plasma-pa powerdevil systemsettings 
# kde-config-gtk-style kde-config-screenlocker ksysguard plasma-nm
apt install -y breeze-gtk-theme #gwenview speedcrunch
apt install -y ark flameshot firefox git keepassxc mpv ncdu qbittorrent simplescreenrecorder unzip zip
systemctl set-default graphical.target

