// Notes

function logURL(){
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    // Access current URL
    console.log(tabs[0].url);
  });
}

// Demo PopUP
function popupPage () {
// Constants
// 500px
var popupActualWidth = 500;
var popupActualHeight = 500;

// var popupHeight = window.screen.availHeight;
// var popupPostionWidth = window.screen.availWidth - popupActualWidth;
// var popupHeight = getBrowserHeight();
// var popupPostionWidth = getBrowserWidth() - popupActualWidth; // Right way
var popupPostionWidth = 800; // patch

var popupPositionHeight = 80;
chrome.tabs.create({
      url: chrome.extension.getURL('app/popup.html'),
      active: false
  }, function(tab) {
      // After the tab has been created, open a window to inject the tab
      chrome.windows.create({
          tabId: tab.id,
          type: 'popup',
          focused: true,
          width: popupActualWidth,
          height: popupActualHeight,
          left:popupPostionWidth,
          top: popupPositionHeight
          // incognito, top, left, ...
      });
  });
}

// Listen when the Icon is clicked
chrome.browserAction.onClicked.addListener(popupPage);

