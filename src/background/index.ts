chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
      id: "detectFontContextMenu",
      title: "Detect font",
      contexts: ["all"],
    });
  });
});

const runContentScript = (tabId: number) => {
  chrome.tabs.executeScript({ file: "./content.js" }, () => {
    chrome.tabs.sendMessage(tabId, {});
  });
};

chrome.contextMenus.onClicked.addListener((_info, tab) => {
  if (tab?.id) {
    runContentScript(tab.id);
  }
});

chrome.browserAction.onClicked.addListener((tab) => {
  if (tab.id) {
    runContentScript(tab.id);
  }
});
