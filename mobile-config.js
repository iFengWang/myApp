// This section sets up some basic app metadata, the entire section is optional.
App.info({
    id: 'ifengwang.meteor.com',
    name: 'iFeng',
    version: '1.0.0',
    description: 'hello world!',
    author: 'iFengWang',
    email: 'gf_w@qq.com',
    website: 'http://ifengwang.github.io/blog',
  });
  
  // Set up resources such as icons and launch screens.
  App.icons({
    iphone_2x: 'public/icons/icon-60@2x.png',
    iphone_3x: 'public/icons/icon-60@3x.png',
    iphone_legacy: 'public/icons/icon-57.png',
    iphone_legacy_2x: 'public/icons/icon-57@2x.png',
    ios_settings_3x: 'public/icons/icon-29@3x.png',
    ipad_spotlight_legacy: 'public/icons/icon-50.png',
    ipad_spotlight_legacy_2x: 'public/icons/icon-50@2x.png',
  });
  
  App.launchScreens({
    iphone_2x: 'public/splash/Default@2x~iphone.png',
    iphone5: 'public/splash/Default~iphone5.png',
    iphone6p_portrait: 'public/splash/Default~1242_2208.png',
    iphone6: 'public/splash/Default~750_1334.png',
  });
  
  // Set PhoneGap/Cordova preferences.
  App.setPreference('BackgroundColor', '0xff0000');
  App.setPreference('Orientation', 'portrait');
  App.setPreference('Orientation', 'portrait', 'ios');

  App.setPreference('HideKeyboardFormAccessoryBar', true);
  App.setPreference('WebAppStartupTimeout', 30000);
  App.setPreference('EnableViewportScale', false);
  App.setPreference('StatusBarOverlaysWebView', true);

  App.setPreference('Fullscreen', false);
  App.setPreference('DisallowOverscroll',true);

  // support for ios
  App.setPreference('Suppresses3DTouchGesture',true);
  App.setPreference('StatusBarStyle', 'lightcontent');
  
  // Pass preferences for a particular PhoneGap/Cordova plugin.
  App.configurePlugin('com.phonegap.plugins.facebookconnect', {
    APP_ID: '1234567890',
    API_KEY: 'supersecretapikey'
  });
  
  // Add custom tags for a particular PhoneGap/Cordova plugin to the end of the
  // generated config.xml. 'Universal Links' is shown as an example here.
  App.appendToConfig(`
    <universal-links>
      <host name="localhost:3000" />
    </universal-links>
  `);