

// Handle context menu item click event
chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "deleteElement") {
    chrome.tabs.sendMessage(tab.id, { action: "contextMenuItemClicked" });
  }
});

// Create a context menu item
chrome.contextMenus.create({
  id: "deleteElement",
  title: "Delete Element",
  contexts: ["all"]
});

