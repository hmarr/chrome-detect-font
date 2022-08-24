chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
      id: "detectFontContextMenu",
      title: "Detect font",
      contexts: ["all"],
    });
  });
});

const runContentScript = async (tabId: number) => {
  await chrome.scripting.executeScript({
    target: { tabId },
    files: ['content.js']
  });

  chrome.tabs.sendMessage(tabId, {});
};

chrome.contextMenus.onClicked.addListener((_info, tab) => {
  if (tab?.id) {
    runContentScript(tab.id);
  }
});

chrome.action.onClicked.addListener((tab) => {
  if (tab.id) {
    runContentScript(tab.id);
  }
});
