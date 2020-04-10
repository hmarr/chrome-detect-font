chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "detectFontContextMenu",
    title: "Detect font",
    contexts: ["all"],
  });
});

chrome.contextMenus.onClicked.addListener((_info, tab) => {
  if (tab?.id) {
    chrome.tabs.sendMessage(tab.id, {});
  }
});

chrome.browserAction.onClicked.addListener((tab) => {
  if (tab.id) {
    const tabId = tab.id;
    chrome.tabs.executeScript(
      {
        file: "./content.js",
      },
      () => {
        chrome.tabs.sendMessage(tabId, {});
      }
    );
  }
});
