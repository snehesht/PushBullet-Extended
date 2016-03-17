
// Logging Function
function grabURL () {
    var grab_curr_url = '';
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    // Access current URL
    // console.log(tabs[0].url);
    grab_curr_url = tabs[0].url;
    console.log(grab_curr_url);
    });
    return curr_url;
}


// Message Passing in Chrome
var port = chrome.runtime.connect({name: "pwa_channel"});
chrome.runtime.onConnect.addListener(function (port) {
    port.onMessage.addListener(function (request) {
        if (request.msg === "grabCurrentTabURL") {
            // Access current URL
            chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
            // Returns URL , Title of the current tab
            port.postMessage({msg:"CurrentTabURL",url:tabs[0].url,title:tabs[0].title});
            });
        } else {}
    });
});




// // Demo PopUP
// function popupPage () {
// // Constants
// // 500px
// var popupActualWidth = 435;
// var popupActualHeight = 460;

// // var popupHeight = window.screen.availHeight;
// // var popupPostionWidth = window.screen.availWidth - popupActualWidth;
// // var popupHeight = getBrowserHeight();
// // var popupPostionWidth = getBrowserWidth() - popupActualWidth; // Right way
// var popupPostionWidth = 800; // patch

// var popupPositionHeight = 80;
// chrome.tabs.create({
//       url: chrome.extension.getURL('index.html'),
//       active: false
//   }, function(tab) {
//       // After the tab has been created, open a window to inject the tab
//       chrome.windows.create({
//           tabId: tab.id,
//           type: 'popup',
//           focused: true,
//           width: popupActualWidth,
//           height: popupActualHeight,
//           left:popupPostionWidth,
//           top: popupPositionHeight
//           // incognito, top, left, ...
//       });
//   });
// }

// // // Listen when the Icon is clicked
// chrome.browserAction.onClicked.addListener(logURL);

// SendMessage();