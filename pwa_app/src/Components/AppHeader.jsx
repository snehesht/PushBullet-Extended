var React = require('react');

var AppHeader = React.createClass({

	onClickClose: function(){
		window.close();
	},
	// Header 
	render: function(){
		return(
			<div className='header'>
				<ul>
					<li className="logo"><a href="#">P W A</a></li>
					<li className="closeButton" onClick={this.onClickClose}><a href="#Close"><i className="fa fa-times"></i></a></li>
					<li className="helpButton"><a href="#Help"><i className="fa fa-question-circle"></i><span className="textOptions">Help</span></a></li>
					<li className="settingsButton"><a href="#Settings"><i className="fa fa-cog"></i><span className="textOptions">Settings</span></a></li>
				</ul>
			</div>
			);
	}
});

module.exports = AppHeader;