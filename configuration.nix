{ config, pkgs, ... }:

{
  imports =
    [ # Include the results of the hardware scan.
    ./hardware-configuration.nix
  ];

  boot.loader.grub.device = "/dev/sda";
  networking.hostName = "vm"; # desktop/laptop
  networking.networkmanager.enable = true; # installs NM. comment out if will use dhcpcd
  time.timeZone = "America/New_York";
  
  environment.systemPackages = with pkgs; [
    # CLI Minimal
    htop
    neofetch 
    vim
    
    # Desktop minimal
    #gitMinimal
    #ncdu
    #p7zip 
    #unzip 
    #wget 
    #zip
    #earlyoom

    # Desktop
    #firefox 
    #keepassxc 
    #meld
    #mpv 
    #notepadqq 
    #qbittorrent 
    #remmina freerdp
    #speedcrunch 
    #youtube-dl-light

    # Plasma apps
    #ark 
    #gnome-breeze 
    #gwenview
    #spectacle
    #plasma-nm 
    #plasma-pa
    
    # Home RDP
    #xrdp
  ];
  
  ### UNCOMMENT THE NEXT SECTIONS (AND APPS FROM ABOVE) WHEN READY FOR DESKTOP INSTALLATION ###
  
  # Xorg
  # services.xserver.enable = true; # auto-installs the Xorg suite
  # services.xserver.layout = "us";
  # services.xserver.xkbOptions = "caps:escape,terminate:ctrl_alt_bksp";
  
  # KDE
  # services.xserver.desktopManager.plasma5.enable = true; # auto-installs the Plasma suite
  # services.xserver.desktopManager.xterm.enable = false;
  # services.xserver.displayManager.sddm.enable = true;
  # environment.variables = { TERM = "konsole-256color"; };

  # Fonts
  # fonts.fonts = with pkgs; [
  #   dejavu_fonts
  #   noto-fonts
  # ];
  
  # Sound
  # sound.enable = true;
  # hardware.pulseaudio.enable = true;
  
  ### Optional ###
  # OpenSSH
  # services.openssh.enable = true;

  # XRDP
  # services.xrdp.enable = true;
  
  # Firewall (ex: for XRDP)
  # networking.firewall.allowedTCPPorts = [ 3389 ];  # 22 auto allowed when ssh is enabled
  # networking.firewall.allowedUDPPorts = [ 3389 ];
  # Or disable the firewall altogether
  # networking.firewall.enable = false;
  
  # CUPS
  # services.printing.enable = true;
  # services.printing.drivers = with pkgs; [ <BLAH> ];
  
  # Laptop Wifi
  # nixpkgs.config.allowUnfree = true;
  # boot.initrd.kernelModules = [ "wl" ];
  # boot.kernelModules = [ "wl" ];
  # boot.extraModulePackages = [ config.boot.kernelPackages.broadcom_sta ];
  # services.xserver.libinput.enable = true;

  # Disable Mouse acceleration
  # services.xserver.config = ''
  #   Section "InputClass"
  #     Identifier "mouse accel"
  #     Driver "libinput"
  #     MatchIsPointer "on"
  #     Option "AccelProfile" "flat"
  #     Option "AccelSpeed" "0"
  #   EndSection
  # '';
  
  # System
  boot.kernel.sysctl = { "vm.swappiness" = 5;};
  boot.kernel.sysctl = { "vm.vfs_cache_pressure" = 50;};
  security.rngd.enable = false; # vm only
  security.sudo.wheelNeedsPassword = false;
  # services.earlyoom.enable = true;

  # System level
  system.stateVersion = "20.03";
  
  # Keep disabled
  # networking.interfaces.enp0s3.useDHCP = true; # if want to use dhcpcd instead of NM
  # networking.wireless.enable = true; # not compatible with NM
}
