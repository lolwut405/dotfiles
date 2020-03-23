#!/bin/bash
# run as root
set -x  #echo on

# NTP
timedatectl set-ntp true

# KDE
pacman -S --noconfirm xorg-server plasma-desktop  #plasma-meta
pacman -S --noconfirm breeze-gtk khotkeys kinfocenter kmix kscreen plasma-nm sddm  #plasma-pa
#kde-gtk-config kdeplasma-addons sddm-kcm user-manager
pacman -S --noconfirm ark dolphin konsole kwrite ttf-croscore  #gwenview kolourpaint notepadqq spectacle
systemctl enable sddm

# Gnome
#pacman -S --noconfirm xorg-server gnome-shell 
#pacman -S --noconfirm gdm gnome-control-center gnome-terminal gnome-tweak-tool nautilus
#pacman -S --noconfirm chrome-gnome-shell flameshot file-roller
#systemctl enable gdm

# Apps
pacman -S --noconfirm git p7zip unzip vim zip
pacman -S --noconfirm firefox mpv qbittorrent speedcrunch youtube-dl #notepadqq
pacman -S --noconfirm keepassxc remmina freerdp
#chromium meld thunderbird virtualbox virtualbox-host-modules-arch

# Openbox
#pacman -S --noconfirm xorg-server openbox xorg-xinit ttf-dejavu
#pacman -S --noconfirm lxappearance-gtk3 lximage-qt lxrandr-gtk3 obconf-qt pcmanfm-qt xarchiver mate-panel #tint2
#pacman -S --noconfirm compton flameshot galculator i3lock lightdm-gtk-greeter rofi sxhkd xterm
#pacman -S --noconfirm alsa-utils papirus-icon-theme pavucontrol pulseaudio-alsa ttf-fira-sans
#systemctl enable lightdm
 
# Unused Apps
#alacritty arqiver-git autorandr bash-completion chrony dunst eog fff glances gsimplecal jnettop kate kitty lf-bin neovim
#network-manager-applet nitrogen nnn notepadqq qimgv-git qt5ct qview peek rclone rsync slock textosaurus tmux     
#udevil volumeicon xautomation xwallpaper lavalauncher

# LAPTOP
#pacman -S --noconfirm broadcom-wl ntfs-3g

# AUR helper
git clone https://bitbucket.org/natemaia/baph.git
cp baph/baph /usr/local/bin
chmod +x /usr/local/bin/baph
rm -rf baph

# Install AUR pkgs
yes | baph -inN ksnip vimiv-qt #gscreenshot

# System-homed - PAM module
cat <<EOF > /etc/pam.d/system-auth
#%PAM-1.0

auth      sufficient pam_unix.so     try_first_pass nullok
-auth     sufficient pam_systemd_home.so
auth      optional   pam_permit.so
auth      required   pam_env.so
auth      required   pam_deny.so

account   sufficient pam_unix.so
-account  sufficient pam_systemd_home.so
account   optional   pam_permit.so
account   required   pam_time.so

-password sufficient pam_systemd_home.so
password  sufficient pam_unix.so     try_first_pass nullok sha512 shadow
password  optional   pam_permit.so

session   required  pam_limits.so
-session  optional  pam_systemd_home.so
session   required  pam_unix.so
session   optional  pam_permit.so
EOF

# Create user
homectl create blah --storage=luks -G wheel

# Lock root account
passwd -l root

# Done
rm s86rewr
echo "Done! Reboot now"

