{ config, pkgs, ... }:

{
  imports =
    [ # Include the results of the hardware scan.
    ./hardware-configuration.nix
  ];

  boot.loader.grub.enable = true;
  boot.loader.grub.version = 2;
  boot.loader.grub.device = "/dev/sda";
  
  networking.hostName = "vm"; # desktop/laptop
  networking.useDHCP = false;
  networking.interfaces.enp0s3.useDHCP = true;
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
      
    # Desktop
    #firefox 
    #mpv 
    #keepassxc 
    #meld
    #notepadqq 
    #qbittorrent 
    #speedcrunch 
    #vimiv
    #youtube-dl-light
    #earlyoom

    # Plasma apps
    #ark 
    #gnome-breeze 
    #spectacle
    #plasma-nm 
    #plasma-pa
  ];
  
  ### UNCOMMENT THE NEXT SECTIONS WHEN READY FOR DESKTOP + APPS ABOVE ###
  # Xorg
  # services.xserver.enable = true; #auto-installs Xorg
  # services.xserver.layout = "us";
  # services.xserver.xkbOptions = "caps:swapescape";
  
  # KDE
  # services.xserver.desktopManager.plasma5.enable = true; #auto-installs KDE
  # services.xserver.desktopManager.xterm.enable = false;
  # services.xserver.displayManager.sddm.enable = true;
  # environment.variables = { TERM = "konsole-256color"; };

  # Fonts
  # fonts.fonts = with pkgs; [
  #   dejavu_fonts
  #   noto-fonts
  #   liberation_ttf
  #   source-code-pro    
  # ];
  
  # Services
  # services.openssh.enable = true;
  # services.earlyoom.service = true;
  # services.flatpak.enable = true;

  # Services for external mounting
  # services.udisks2.enable = true;
  # services.devmon.enable = true;
    
  # Sound
  # sound.enable = true;
  # hardware.pulseaudio.enable = true;

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

  # Enable CUPS
  # services.printing.enable = true;
  # services.printing.drivers = with pkgs; [ <BLAH> ];

  ########
  # Laptop
  # nixpkgs.config.allowUnfree = true;
  # networking.wireless.enable = true;
  # services.xserver.libinput.enable = true;
  
  # Server
  # networking.firewall.allowedTCPPorts = [ ];  #22 wont need opened
  # networking.firewall.allowedUDPPorts = [ ];
  # Or disable the firewall altogether
  # networking.firewall.enable = false;
  
  # System
  boot.kernel.sysctl = { "vm.swappiness" = 5;};
  boot.kernel.sysctl = { "vm.vfs_cache_pressure" = 50;};
  security.rngd.enable = false; # vm only
  security.sudo.wheelNeedsPassword = false;
  
  # System level
  system.stateVersion = "19.09";
}