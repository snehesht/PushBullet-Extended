var React = require('react');
var ReactDOM = require('react-dom');
var DemoApp = require('./Components/DemoApp');
require("./main.scss");
var SettingsView = require("./Components/Settings");
var Help = require("./Components/Help");
var App = require('./Components/App');

Router();
window.addEventListener("hashchange", Router, false);

function Router(){
console.log(location.hash);
if (location.hash === "#Settings") {
	return ReactDOM.render(<SettingsView />,document.getElementById('mainContainer'));
} 
else if (location.hash === "#Help"){
	return ReactDOM.render(<Help />,document.getElementById('mainContainer'));
}
else {
	return ReactDOM.render(<App />,document.getElementById('mainContainer'));
}
}
