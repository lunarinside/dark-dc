chrome.browserAction.onClicked.addListener(() => chrome.storage.local.get({enabled: true}, prefs => {
  prefs.enabled = !prefs.enabled;
  chrome.storage.local.set(prefs);
}));

chrome.storage.onChanged.addListener(prefs => {
  const bol = prefs.enabled.newValue;
  const path = {
    path: {
      16: 'icons' + (bol ? '/' : '/disabled/') + 'icon16.png',
      32: 'icons' + (bol ? '/' : '/disabled/') + 'icon32.png',
      64: 'icons' + (bol ? '/' : '/disabled/') + 'icon64.png',
      256: 'icons' + (bol ? '/' : '/disabled/') + 'icon256.png',
    }
  };
  chrome.browserAction.setIcon(path);
});