/******
References: https://github.com/ghacksuserjs/ghacks-user.js + https://github.com/crssi/Firefox

1. Download user.js from ghacks 
2. Append the contents of this file to the bottom of it
3. Make a new profile (about:profiles)
4. Copy the user.js and put in your profile folder (about:profiles)  
5. Copy chrome folder with userChrome.css as well
6. Enable the bookmarks bar and reimport bookmarks

# Primary addons
Clearurls;
https://addons.mozilla.org/en-US/firefox/addon/clearurls/
Ublock Origin; 
https://addons.mozilla.org/addon/ublock-origin/
Ads: Adblock Warning Removal List
Privacy: Fanboy Enhanced Tracking List
Annoyances: Anti-Facebook + Fanboy Annoyance
Custom: Antifonts:
https://fanboy.co.nz/fanboy-antifonts.txt
Firemonkey; #import backup;
https://addons.mozilla.org/en-US/firefox/addon/firemonkey/
Vimium-FF; #import backup 
https://addons.mozilla.org/en-US/firefox/addon/vimium-ff/

# Linux
FFMPV;
https://addons.mozilla.org/en-US/firefox/addon/ff2mpv/?src=search

# Recently disabled
Tomato Clock;
https://addons.mozilla.org/en-US/firefox/addon/tomato-clock/
HTTPZ; 
https://addons.mozilla.org/en-US/firefox/addon/httpz/
Privacy Redirect;
https://addons.mozilla.org/en-US/firefox/addon/privacy-redirect/?src=search
Decentraleyes; 
https://addons.mozilla.org/en-US/firefox/addon/decentraleyes/
uMatrix; #includes referrer spoof 
https://addons.mozilla.org/en-US/firefox/addon/umatrix/
Temporary Containers; #import preferences; 
https://addons.mozilla.org/firefox/addon/temporary-containers/
Skip Redirect; #disable notifications; 
https://addons.mozilla.org/en-US/firefox/addon/skip-redirect/
Smart Referer; 
https://addons.mozilla.org/en-US/firefox/addon/smart-referer/
Containerise; 
https://addons.mozilla.org/en-US/firefox/addon/containerise/

# Disabled
Bypass paywalls; 
https://github.com/iamadamdev/bypass-paywalls-firefox
CanvasBlocker; 
https://addons.mozilla.org/en-US/firefox/addon/canvasblocker/ 
Checkmarks; 
https://addons.mozilla.org/en-US/firefox/addon/checkmarks-web-ext/
Sponsor block;
https://addons.mozilla.org/en-US/firefox/addon/sponsorblock/
******/

/* PERSONAL */
   user_pref("browser.ctrlTab.recentlyUsedOrder", false);
   user_pref("browser.display.use_document_fonts", 1); // enable web fonts
   user_pref("browser.download.folderList", 0); // save downloads to desktop
   user_pref("browser.download.useDownloadDir", true); // dont prompt for download locations
   user_pref("browser.search.context.loadInBackground", true);
   user_pref("browser.uidensity", 1); //
   user_pref("browser.urlbar.suggest.openpage", false); // disable search for open tabs
   user_pref("dom.event.clipboardevents.enabled", true); // gitlab copy/paste issue
   user_pref("extensions.pocket.enabled", false); // disable Pocket
   user_pref("findbar.highlightAll", true); // highlight all hits on search
   user_pref("general.smoothScroll", false);
   user_pref("keyword.enabled", true); // allow urlbar search
   user_pref("layout.word_select.eat_space_to_next_word", false);  // Windows only
   user_pref("media.autoplay.default", 5); // block all video autoplay
   user_pref("permissions.default.desktop-notification", 2); //disable push notifications
   user_pref("toolkit.cosmeticAnimations.enabled", false); // disable tab animations
   user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); // enable userchrome
   user_pref("ui.key.menuAccessKey", 0); // disable alt key toggling the menu bar
   user_pref("media.videocontrols.picture-in-picture.enabled", disabled);
   user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", disabled);

/* Disable What's New */
   user_pref("browser.startup.homepage_override.mstone", "ignore"); // master switch
   user_pref("startup.homepage_welcome_url", "");
   user_pref("startup.homepage_welcome_url.additional", "");
   user_pref("startup.homepage_override_url", ""); // What's New page after updates
/* Warnings */
   user_pref("browser.tabs.warnOnClose", false);
   user_pref("browser.tabs.warnOnCloseOtherTabs", false);
   user_pref("browser.tabs.warnOnOpen", false);
   user_pref("general.warnOnAboutConfig", false);
   user_pref("browser.aboutConfig.showWarning", false); // [FF67+]
/* Full-screen popups */
   user_pref("full-screen-api.transition-duration.enter", "0 0");
   user_pref("full-screen-api.transition-duration.leave", "0 0");
   user_pref("full-screen-api.warning.delay", 0);
   user_pref("full-screen-api.warning.timeout", 0);
/* Newtab page */
   user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
   user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
/* Tracking protection */
   user_pref("privacy.trackingprotection.cryptomining.enabled", true);
   user_pref("privacy.trackingprotection.fingerprinting.enabled", true);

/* New FF window dimensions - 1440p montior */
   user_pref("privacy.window.maxInnerWidth", 1700); // set 1700px width at start
   user_pref("privacy.window.maxInnerHeight", 1300); // set 1300px height at start

/* DRM */
   user_pref("media.gmp-widevinecdm.visible", true); // enable widevine CDM; Netflix, Amazon Prime, Hulu
   user_pref("media.gmp-widevinecdm.enabled", true); // enable widevine CDM; Netflix, Amazon Prime, Hulu

/* PERSONAL LINUX TWEAKS ***/
    user_pref("browser.urlbar.clickSelectsAll", true);
    user_pref("general.autoScroll", true);
    user_pref("gfx.webrender.all", true);
    user_pref("layers.acceleration.force-enabled", true);
    user_pref("layers.omtp.enabled", true);
    user_pref("layout.display-list.retain", true);
    user_pref("mousewheel.min_line_scroll_amount", 20);

/* DISABLED FOR NOW */
// user_pref("browser.download.forbid_open_with", true); // disable open with when downloading
// user_pref("browser.tabs.selectOwnerOnClose", false);
// user_pref("extensions.update.autoUpdateDefault", true); // enable auto-installing Firefox extensions
// user_pref("security.mixed_content.block_display_content", false); // allow non-secure passive content
// user_pref("security.ssl.require_safe_negotiation", false); //allow weak ciphers
