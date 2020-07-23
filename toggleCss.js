(() => {
  chrome.storage.local.get({enabled: true}, prefs => {
    if (prefs.enabled) {
      document.documentElement.classList.add('dark');
    }
  });

  chrome.storage.onChanged.addListener(() => {
    document.documentElement.classList.toggle('dark');
  });
})()