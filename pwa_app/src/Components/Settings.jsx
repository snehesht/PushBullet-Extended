var React = require("react");
var AppHeader = require('./AppHeader');
var SettingsAccountInfo = require('./SettingsAccountInfo');
var SettingsFeedback = require("./SettingsFeedback");


var SettingsView = React.createClass({
	render: function(){
		return(
			<div className='container'>
				<AppHeader />
				<SettingsAccountInfo />
				<SettingsFeedback />
			</div>
			);
	}

});

module.exports = SettingsView;