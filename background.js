// background.js
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.closePopup) {
      chrome.action.getPopup({}, function (popupUrl) {
        if (popupUrl) {
          chrome.windows.getCurrent(function (window) {
            if (window.type === 'popup') {
              chrome.windows.remove(window.id);
            }
          });
        }
      });
    }
  });
  