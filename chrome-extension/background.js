(async () => {
  const ACTIVE_ICONS = {
    16: 'icons/icon-active-16.png',
    32: 'icons/icon-active-32.png',
    48: 'icons/icon-active-48.png',
    128: 'icons/icon-active-128.png'
  };

  const INACTIVE_ICONS = {
    16: 'icons/icon-inactive-16.png',
    32: 'icons/icon-inactive-32.png',
    48: 'icons/icon-inactive-48.png',
    128: 'icons/icon-inactive-128.png'
  };

  async function setIcon(enabled) {
    await chrome.action.setIcon({ path: enabled ? ACTIVE_ICONS : INACTIVE_ICONS });
    await chrome.action.setTitle({
      title: enabled ? 'Pornhub UNN: активен' : 'Pornhub UNN: выключен'
    });
  }

  async function applyInitialState() {
    const { enabled = true } = await chrome.storage.local.get({ enabled: true });
    await setIcon(enabled);
  }

  chrome.runtime.onInstalled.addListener(async () => {
    await chrome.storage.local.set({ enabled: true });
    await setIcon(true);
  });

  chrome.runtime.onStartup.addListener(applyInitialState);

  chrome.action.onClicked.addListener(async (tab) => {
    const { enabled = true } = await chrome.storage.local.get({ enabled: true });
    const next = !enabled;
    await chrome.storage.local.set({ enabled: next });
    await setIcon(next);

    if (tab?.id) {
      try {
        await chrome.tabs.sendMessage(tab.id, { type: 'toggle-theme', enabled: next });
      } catch (err) {
        // content script might not be injected on this tab; ignore
      }
    }
  });
})();
