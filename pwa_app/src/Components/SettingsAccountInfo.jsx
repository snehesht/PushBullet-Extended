var React = require("react");


var SettingsAccountInfo = React.createClass({
	render: function(){
		return(
			<div className="accountInfo">
				<ul>
					<li className="profilepic"><img src="http://media.merchantcircle.com/20649169/Husky-Logo-100x100_full.gif" alt=""/></li>
					<li>
						<ul className="accountInfoText">
							<li><span>John Doe</span></li>
							<li>john.doe@mail.uc.edu</li>
							<li><br /></li>
							<ul className="SettingsInlineBlock">
								<li ><a href="" className="changePassword" >Change Password</a></li>
								<li ><a href="" className="logout" >Logout</a></li>
							</ul>
						</ul>
					</li>
				</ul>
			</div>
			);
	}

});

module.exports = SettingsAccountInfo;