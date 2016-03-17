var React = require('react');
var AppHeader = require('./AppHeader');
var AppBody = require('./AppBody');
var AppFooter = require('./AppFooter');

var SettingsView = require("./Settings");

var Immutable = require('immutable');
var dataStorage = Immutable.Map();

var grabLocalStorage = function(){
	var pt = '';
	var pu = '';
	chrome.storage.onChanged.addListener(function(){
		chrome.storage.sync.get('pageTitle', function(data){
			pt = data.pageTitle;
			console.log(pt);
		});
		chrome.storage.sync.get('pageURL', function(data){
			pu = data.pageURL;
			console.log(pu);
		});
	return({"title":pt,"url":pu});
	});
}

// React main App
var App = React.createClass({
	// componentWillMount: function(){
	// 	// Access Chrome Tab Information
	// 	var port = chrome.runtime.connect({name: "pwa_channel"});
	// 	// Add event listener to listen for new messages
	// 	port.onMessage.addListener(function (request) {
	// 	    if (request.msg === "CurrentTabURL") {
	// 	    	// Log current tab URL
	// 	        console.log(request.title + ' ' + request.url)
	// 	        this.setState({tabTitle:request.title,tabURL:request.url});
	// 	    } else {}
	// 	});
	// 	// Ask for Current Tab Url
	// 	port.postMessage({msg: "grabCurrentTabURL"});

	// },
	getInitialState : function(){
		return{
			pageTitle : "",
			pageURL : ""
		};
	},
	// updateState: function(pageTitle,pageURL){
	// this.setState({
	//     	pageTitle: Data["title"]
	//     });
	// this.setState({
	//     	pageURL:  Data["URL"]
	//     });
 //    console.log('state updated');
	// },	
	componentWillMount: function (){
		console.log(dataStorage.get("title"));
		console.log(dataStorage.get("url"));
		// var data = grabLocalStorage();
		// console.log(data);
		// this.setState({pageTitle:  data["title"]});
		// this.setState({pageURL:  data["url"]});
	},
	render: function(){
		console.log("Hello");
		console.log(this.state.pageTitle);
		return(
			<div className='container'>
				<AppHeader />
				<AppBody pageTitle={this.state.pageTitle} pageURL={this.state.pageURL} />
				<AppFooter />
			</div>
			);
	}
});

module.exports = App;