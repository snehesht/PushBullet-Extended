var React = require("react");

var HelpInfo = React.createClass({
	render: function(){
		return(
			<div className="helpInfo">
			<span className="helpTitle">About the App</span>
			<p>The Personal Web Archive is built with the best features of both <a target="_blank" href="https://archive.org/">Archive.org</a> and Pushbullet in mind.</p>
			<p>Website: <a href="http://webarchive.xyz">webarchive.xyz</a></p>
			<span className="helpTitle">How to use the app ? </span>
			<p> </p>
			</div>
			);
	}

});

module.exports = HelpInfo;