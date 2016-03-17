var port = chrome.runtime.connect({name: "pwa_channel"});

var Immutable = require('immutable');
var dataStorage = Immutable.Map({title:"",url:""});

// Add event listener to listen for new messages
port.onMessage.addListener(function (request) {
    if (request.msg === "CurrentTabURL") {
    	dataStorage.set('title':request.title);
    	dataStorage.set('url':request.url);
    	// Log current tab URL
        // console.log(request.title + ' ' + request.url)
        chrome.storage.sync.set({'pageTitle': request.title}, function(){
        	console.log('data set' + request.title);

        } );
        chrome.storage.sync.set({'pageURL': request.url}, function(){
        	console.log('data set' + request.url);
        } );
    } else {}
});

// Ask for Current Tab Url
port.postMessage({msg: "grabCurrentTabURL"});

