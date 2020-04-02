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
    # Minimal
    htop 
    neofetch 
    vim
    
    gitMinimal
    p7zip 
    unzip 
    wget 
    zip
    #earlyoom
  
    # GUI
    #firefox 
    #mpv 
    #youtube-dl-light
    #keepassxc 
    #notepadqq 
    #qbittorrent 
    #speedcrunch 
    #vimiv
    #meld
	
    # Plasma
    #ark gnome-breeze spectacle
    #plasma-nm plasma-pa
  ];

  fonts.fonts = with pkgs; [
    dejavu_fonts
    noto-fonts
    liberation_ttf
    source-code-pro    
  ];
  
  # Xorg
  # services.xserver.enable = true; #will install packages
  # services.xserver.layout = "us";
  # services.xkbOptions = "caps:swapescape";
  
  # KDE
  # services.xserver.desktopManager.plasma5.enable = true;
  # services.xserver.desktopManager.xterm.enable = false;
  # services.xserver.displayManager.sddm.enable = true;
  # environment.variables = { TERM = "konsole-256color"; };

  # Services
  # services.earlyoom.service = true;
  # services.openssh.enable = true;
  # services.flatpak.enable = true;

  # Services for external mounting
  # services.udisks2.enable = true;
  # services.devmon.enable = true;
  
  # Security
  security.rngd.enable = false; # vm only
  security.sudo.wheelNeedsPassword = false;
  
  # Sound
  # sound.enable = true;
  # hardware.pulseaudio.enable = true;

  # Disable Mouse acceleration
  services.xserver.config = ''
    Section "InputClass"
      Identifier "mouse accel"
      Driver "libinput"
      MatchIsPointer "on"
      Option "AccelProfile" "flat"
      Option "AccelSpeed" "0"
    EndSection
  '';

  # Kernel
  boot.kernel.sysctl = { "vm.swappiness" = 5;};
  boot.kernel.sysctl = { "vm.vfs_cache_pressure" = 50;};

  # Enable CUPS
  # services.printing.enable = true;
  # services.printing.drivers = with pkgs; [ <BLAH> ];

  # Laptop
  # networking.wireless.enable = true;
  # services.xserver.libinput.enable = true;

  # Open ports in the firewall
  # networking.firewall.allowedTCPPorts = [ ];
  # networking.firewall.allowedUDPPorts = [ ];
  # Or disable the firewall altogether
  # networking.firewall.enable = false;

  # nixpkgs.config = {
  #   allowUnfree = true;
  # };

  system.stateVersion = "19.09";
}
