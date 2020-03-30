/******
References: https://github.com/ghacksuserjs/ghacks-user.js

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
#Custom: Antifonts: https://fanboy.co.nz/fanboy-antifonts.txt
ViolentMonkey;
https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/
Vimium-FF; #import backup 
https://addons.mozilla.org/en-US/firefox/addon/vimium-ff/
LocalCDN; create rules for ublock
https://addons.mozilla.org/en-US/firefox/addon/localcdn-fork-of-decentraleyes/
Group Speed Dial;
https://addons.mozilla.org/en-US/firefox/addon/groupspeeddial/
# ff2mpv;
https://addons.mozilla.org/en-US/firefox/addon/ff2mpv/?src=search

# Recently disabled
Firemonkey; #import backup;
https://addons.mozilla.org/en-US/firefox/addon/firemonkey/
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
// user_pref("browser.download.folderList", 0); // save downloads to desktop
   user_pref("browser.download.useDownloadDir", true); // dont prompt for download locations
   user_pref("browser.search.context.loadInBackground", true);
   user_pref("browser.uidensity", 1); 
   user_pref("browser.urlbar.oneOffSearches", false);
// user_pref("browser.urlbar.suggest.openpage", false); // disable search for open tabs
// user_pref("browser.tabs.closeWindowWithLastTab", false); // keep window open
   user_pref("dom.event.clipboardevents.enabled", true); // gitlab copy/paste issue
   user_pref("extensions.pocket.enabled", false); // disable Pocket
   user_pref("findbar.highlightAll", true); // highlight all hits on search
   user_pref("general.smoothScroll", false);
   user_pref("identity.fxaccounts.enabled", false); //disable firefox sync
   user_pref("keyword.enabled", true); // allow urlbar search
   user_pref("layout.word_select.eat_space_to_next_word", false);  // Windows only
   user_pref("media.autoplay.default", 5); // block all video autoplay
   user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", false);
   user_pref("network.trr.mode", 3); //enable DoH
   user_pref("permissions.default.desktop-notification", 2); //disable push notifications
   user_pref("toolkit.cosmeticAnimations.enabled", false); // disable tab animations
   user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); // enable userchrome
   user_pref("ui.key.menuAccessKey", 0); // disable alt key toggling the menu bar
   
/* Enable history and session restore... */
// user_pref("browser.startup.page", 3); //restore previous sessons
// user_pref("privacy.clearOnShutdown.history", false); // Browsing & Download History

/* FPI annoying window dimensions - 1440p montior */
   user_pref("privacy.window.maxInnerWidth", 1700); // set 1700px width at start
   user_pref("privacy.window.maxInnerHeight", 1300); // set 1300px height at start
   
/* Missing ghacks newtab settings */
  user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
  user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
  user_pref("browser.newtabpage.activity-stream.showSearch", false);
 
/* DRM */
// user_pref("media.gmp-widevinecdm.visible", true); // enable widevine CDM; Netflix, Amazon Prime, Hulu
// user_pref("media.gmp-widevinecdm.enabled", true); // enable widevine CDM; Netflix, Amazon Prime, Hulu
// user_pref("media.eme.enabled", true); //enable DRM EME (Encryption Media Extension)

/* From Ghacks */
/* Disable What's New */
   user_pref("browser.startup.homepage_override.mstone", "ignore"); // master switch
   user_pref("startup.homepage_welcome_url", "");
   user_pref("startup.homepage_welcome_url.additional", "");
   user_pref("startup.homepage_override_url", ""); // What's New page after updates
/* Warnings */
// user_pref("browser.tabs.warnOnClose", false);
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

/* LINUX TWEAKS ***/
    user_pref("browser.tabs.drawInTitlebar", true);
    user_pref("browser.urlbar.clickSelectsAll", true); //obsolete in ff75+
    user_pref("browser.urlbar.doubleClickSelectsAll", false); //obsolete in ff75+
    user_pref("general.autoScroll", true);
    user_pref("gfx.webrender.all", true);
    user_pref("layers.acceleration.force-enabled", true);
    user_pref("mousewheel.min_line_scroll_amount", 20);

/* LINUX Fonts ***/
//REFERENCES: https://github.com/ghacksuserjs/ghacks-user.js/issues/888 + https://github.com/pyllyukko/user.js/issues/286
   user_pref("browser.display.use_document_fonts", 1); // enable web fonts
   user_pref("font.default.lo", "Noto Sans Lao");
   user_pref("font.default.my", "Noto Sans Myanmar");
   user_pref("font.default.x-western", "sans-serif");
   user_pref("font.name-list.cursive.ar", "Noto Naskh Arabic, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.cursive.he", "Noto Sans Hebrew, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.cursive.x-cyrillic", "Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.cursive.x-unicode", "Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.cursive.x-western", "Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.fantasy.ar", "Noto Naskh Arabic, Tinos, Georgia,  Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.fantasy.el", "Tinos, Georgia,  Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.fantasy.he", "Noto Sans Hebrew, Tinos, Georgia,  Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.fantasy.x-cyrillic", "Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.fantasy.x-unicode", "Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.fantasy.x-western", "Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.monospace.ar", "Noto Naskh Arabic, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.monospace.el", "Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.monospace.he", "Noto Sans Hebrew, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.monospace.ja", "Noto Sans JP Regular, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.monospace.ko", "Noto Sans KR Regular, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.monospace.th", "Noto Sans Thai, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.monospace.x-armn", "Noto Sans Armenian, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.monospace.x-beng", "Noto Sans Bengali, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.monospace.x-cyrillic", "Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.monospace.x-devanagari", "Noto Sans Devanagari, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.monospace.x-ethi", "Noto Sans Ethiopic, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.monospace.x-geor", "Noto Sans Georgian, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.monospace.x-gujr", "Noto Sans Gujarati, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.monospace.x-guru", "Noto Sans Gurmukhi, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.monospace.x-khmr", "Noto Sans Khmer, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.monospace.x-knda", "Noto Sans Kannada, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.monospace.x-mlym", "Noto Sans Malayalam, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.monospace.x-orya", "Noto Sans Oriya, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.monospace.x-sinh", "Noto Sans Sinhala, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.monospace.x-tamil", "Noto Sans Tamil, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.monospace.x-telu", "Noto Sans Telugu, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.monospace.x-tibt", "Noto Sans Tibetan, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.monospace.x-unicode", "Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.monospace.x-western", "Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.monospace.zh-CN", "Noto Sans SC Regular, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.monospace.zh-HK", "Noto Sans TC Regular, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.monospace.zh-TW", "Noto Sans TC Regular, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.sans-serif.ar", "Noto Naskh Arabic, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.sans-serif.el", "Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.sans-serif.he", "Noto Sans Hebrew, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.sans-serif.ja", "Noto Sans JP Regular, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.sans-serif.ko", "Noto Sans KR Regular, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.sans-serif.th", "Noto Sans Thai, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.sans-serif.x-armn", "Noto Sans Armenian, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.sans-serif.x-beng", "Noto Sans Bengali, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.sans-serif.x-cyrillic", "Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.sans-serif.x-devanagari", "Noto Sans Devanagari, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.sans-serif.x-ethi", "Noto Sans Ethiopic, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.sans-serif.x-geor", "Noto Sans Georgian, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.sans-serif.x-gujr", "Noto Sans Gujarati, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.sans-serif.x-guru", "Noto Sans Gurmukhi, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.sans-serif.x-khmr", "Noto Sans Khmer, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.sans-serif.x-knda", "Noto Sans Kannada, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.sans-serif.x-mlym", "Noto Sans Malayalam, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.sans-serif.x-orya", "Noto Sans Oriya, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.sans-serif.x-sinh", "Noto Sans Sinhala, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.sans-serif.x-tamil", "Noto Sans Tamil, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.sans-serif.x-telu", "Noto Sans Telugu, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.sans-serif.x-tibt", "Noto Sans Tibetan, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.sans-serif.x-unicode", "Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.sans-serif.x-western", "Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.sans-serif.zh-CN", "Noto Sans SC Regular, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.sans-serif.zh-HK", "Noto Sans TC Regular, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.sans-serif.zh-TW", "Noto Sans TC Regular, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.serif.ar", "Noto Naskh Arabic, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.serif.el", "Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.serif.he", "Tinos, Georgia, Noto Sans Hebrew, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.serif.ja", "Noto Sans JP Regular, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.serif.ko", "Noto Sans KR Regular, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.serif.th", "Noto Serif Thai, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.serif.x-armn", "Noto Serif Armenian, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.serif.x-beng", "Noto Sans Bengali, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.serif.x-cyrillic", "Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.serif.x-devanagari", "Noto Sans Devanagari, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.serif.x-ethi", "Noto Sans Ethiopic, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.serif.x-geor", "Noto Sans Georgian, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.serif.x-gujr", "Noto Sans Gujarati, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.serif.x-guru", "Noto Sans Gurmukhi, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.serif.x-khmr", "Noto Serif Khmer, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.serif.x-knda", "Noto Sans Kannada, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.serif.x-mlym", "Noto Sans Malayalam, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.serif.x-orya", "Noto Sans Oriya, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.serif.x-sinh", "Noto Sans Sinhala, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.serif.x-tamil", "Noto Sans Tamil, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.serif.x-telu", "Noto Sans Telugu, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.serif.x-tibt", "Noto Sans Tibetan, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.serif.x-unicode", "Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.serif.x-western", "Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.serif.zh-CN", "Noto Sans SC Regular, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.serif.zh-HK", "Noto Sans TC Regular, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name-list.serif.zh-TW", "Noto Sans TC Regular, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
   user_pref("font.name.cursive.ar", "Noto Naskh Arabic");
   user_pref("font.name.cursive.el", "Tinos, Georgia");
   user_pref("font.name.cursive.he", "Noto Sans Hebrew");
   user_pref("font.name.cursive.x-cyrillic", "Tinos, Georgia");
   user_pref("font.name.cursive.x-unicode", "Tinos, Georgia");
   user_pref("font.name.cursive.x-western", "Tinos, Georgia");
   user_pref("font.name.fantasy.ar", "Noto Naskh Arabic");
   user_pref("font.name.fantasy.el", "Tinos, Georgia");
   user_pref("font.name.fantasy.he", "Noto Sans Hebrew");
   user_pref("font.name.fantasy.x-cyrillic", "Tinos, Georgia");
   user_pref("font.name.fantasy.x-unicode", "Tinos, Georgia");
   user_pref("font.name.fantasy.x-western", "Tinos, Georgia");
   user_pref("font.name.monospace.ar", "Noto Naskh Arabic");
   user_pref("font.name.monospace.el", "Tinos, Georgia");
   user_pref("font.name.monospace.he", "Noto Sans Hebrew");
   user_pref("font.name.monospace.ja", "Noto Sans JP Regular");
   user_pref("font.name.monospace.ko", "Noto Sans KR Regular");
   user_pref("font.name.monospace.my", "Noto Sans Myanmar");
   user_pref("font.name.monospace.th", "Noto Sans Thai");
   user_pref("font.name.monospace.x-armn", "Noto Sans Armenian");
   user_pref("font.name.monospace.x-beng", "Noto Sans Bengali");
   user_pref("font.name.monospace.x-cyrillic", "Cousine, Courier, Courier New");
   user_pref("font.name.monospace.x-devanagari", "Noto Sans Devanagari");
   user_pref("font.name.monospace.x-ethi", "Noto Sans Ethiopic");
   user_pref("font.name.monospace.x-geor", "Noto Sans Georgian");
   user_pref("font.name.monospace.x-gujr", "Noto Sans Gujarati");
   user_pref("font.name.monospace.x-guru", "Noto Sans Gurmukhi");
   user_pref("font.name.monospace.x-khmr", "Noto Sans Khmer");
   user_pref("font.name.monospace.x-knda", "Noto Sans Kannada");
   user_pref("font.name.monospace.x-mlym", "Noto Sans Malayalam");
   user_pref("font.name.monospace.x-orya", "Noto Sans Oriya");
   user_pref("font.name.monospace.x-sinh", "Noto Sans Sinhala");
   user_pref("font.name.monospace.x-tamil", "Noto Sans Tamil");
   user_pref("font.name.monospace.x-telu", "Noto Sans Telugu");
   user_pref("font.name.monospace.x-tibt", "Noto Sans Tibetan");
   user_pref("font.name.monospace.x-unicode", "Cousine, Courier, Courier New");
   user_pref("font.name.monospace.x-western", "Cousine, Courier, Courier New");
   user_pref("font.name.monospace.zh-CN", "Noto Sans SC Regular");
   user_pref("font.name.monospace.zh-HK", "Noto Sans TC Regular");
   user_pref("font.name.monospace.zh-TW", "Noto Sans TC Regular");
   user_pref("font.name.sans-serif.ar", "Noto Naskh Arabic");
   user_pref("font.name.sans-serif.el", "Arimo, Arial, Verdana");
   user_pref("font.name.sans-serif.he", "Noto Sans Hebrew");
   user_pref("font.name.sans-serif.ja", "Noto Sans JP Regular");
   user_pref("font.name.sans-serif.ko", "Noto Sans KR Regular");
   user_pref("font.name.sans-serif.th", "Noto Sans Thai");
   user_pref("font.name.sans-serif.x-armn", "Noto Sans Armenian");
   user_pref("font.name.sans-serif.x-beng", "Noto Sans Bengali");
   user_pref("font.name.sans-serif.x-cyrillic", "Arimo, Arial, Verdana");
   user_pref("font.name.sans-serif.x-devanagari", "Noto Sans Devanagari");
   user_pref("font.name.sans-serif.x-ethi", "Noto Sans Ethiopic");
   user_pref("font.name.sans-serif.x-geor", "Noto Sans Georgian");
   user_pref("font.name.sans-serif.x-gujr", "Noto Sans Gujarati");
   user_pref("font.name.sans-serif.x-guru", "Noto Sans Gurmukhi");
   user_pref("font.name.sans-serif.x-khmr", "Noto Sans Khmer");
   user_pref("font.name.sans-serif.x-knda", "Noto Sans Kannada");
   user_pref("font.name.sans-serif.x-mlym", "Noto Sans Malayalam");
   user_pref("font.name.sans-serif.x-orya", "Noto Sans Oriya");
   user_pref("font.name.sans-serif.x-sinh", "Noto Sans Sinhala");
   user_pref("font.name.sans-serif.x-tamil", "Noto Sans Tamil");
   user_pref("font.name.sans-serif.x-telu", "Noto Sans Telugu");
   user_pref("font.name.sans-serif.x-tibt", "Noto Sans Tibetan");
   user_pref("font.name.sans-serif.x-unicode", "Arimo, Arial, Verdana");
   user_pref("font.name.sans-serif.x-western", "Arimo, Arial, Verdana");
   user_pref("font.name.sans-serif.zh-CN", "Noto Sans SC Regular");
   user_pref("font.name.sans-serif.zh-HK", "Noto Sans TC Regular");
   user_pref("font.name.sans-serif.zh-TW", "Noto Sans TC Regular");
   user_pref("font.name.sans.my", "Noto Sans Myanmar");
   user_pref("font.name.serif.ar", "Noto Naskh Arabic");
   user_pref("font.name.serif.el", "Tinos, Georgia");
   user_pref("font.name.serif.he", "Noto Sans Hebrew");
   user_pref("font.name.serif.ja", "Noto Sans JP Regular");
   user_pref("font.name.serif.ko", "Noto Sans KR Regular");
   user_pref("font.name.serif.my", "Noto Sans Myanmar");
   user_pref("font.name.serif.th", "Noto Serif Thai");
   user_pref("font.name.serif.x-armn", "Noto Serif Armenian");
   user_pref("font.name.serif.x-beng", "Noto Sans Bengali");
   user_pref("font.name.serif.x-cyrillic", "Tinos, Georgia");
   user_pref("font.name.serif.x-devanagari", "Noto Sans Devanagari");
   user_pref("font.name.serif.x-ethi", "Noto Sans Ethiopic");
   user_pref("font.name.serif.x-geor", "Noto Sans Georgian");
   user_pref("font.name.serif.x-gujr", "Noto Sans Gujarati");
   user_pref("font.name.serif.x-guru", "Noto Sans Gurmukhi");
   user_pref("font.name.serif.x-khmr", "Noto Serif Khmer");
   user_pref("font.name.serif.x-knda", "Noto Sans Kannada");
   user_pref("font.name.serif.x-mlym", "Noto Sans Malayalam");
   user_pref("font.name.serif.x-orya", "Noto Sans Oriya");
   user_pref("font.name.serif.x-sinh", "Noto Sans Sinhala");
   user_pref("font.name.serif.x-tamil", "Noto Sans Tamil");
   user_pref("font.name.serif.x-telu", "Noto Sans Telugu");
   user_pref("font.name.serif.x-tibt", "Noto Sans Tibetan");
   user_pref("font.name.serif.x-unicode", "Tinos, Georgia");
   user_pref("font.name.serif.x-western", "Tinos, Georgia");
   user_pref("font.name.serif.zh-CN", "Noto Sans SC Regular");
   user_pref("font.name.serif.zh-HK", "Noto Sans TC Regular");
   user_pref("font.name.serif.zh-TW", "Noto Sans TC Regular");

/* DISABLED FOR NOW */
// user_pref("browser.download.forbid_open_with", true); // disable open with when downloading
// user_pref("browser.tabs.selectOwnerOnClose", false);
// user_pref("extensions.update.autoUpdateDefault", true); // enable auto-installing Firefox extensions
// user_pref("security.mixed_content.block_display_content", false); // allow non-secure passive content
// user_pref("security.ssl.require_safe_negotiation", false); //allow weak ciphers
// user_pref("layers.omtp.enabled", true);
// user_pref("layout.display-list.retain", true);]

