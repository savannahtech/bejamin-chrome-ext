
let popupOpen = false;
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const activeTab = tabs[0];
  
  if (!popupOpen) {
    popupOpen = true;

    // Inject content.css and content.js
      chrome.tabs.executeScript(activeTab.id, { file: 'content.js' }, () => {
        // Execute injectContentScript function
        chrome.tabs.executeScript(activeTab.id, { code: 'getInfo();' });
    });
  } else {
    popupOpen = false;
    
    // Remove the added div by executing a content script
    chrome.tabs.executeScript(activeTab.id, { code: 'removeInfoDiv();' });
  }
});
