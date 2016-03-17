var React = require("react");
var AppHeader = require('./AppHeader');
var HelpInfo = require("./HelpInfo");


var Help = React.createClass({
	render: function(){
		return(
			<div className='container'>
				<AppHeader />
				<HelpInfo />
			</div>
			);
	}

});

module.exports = Help;