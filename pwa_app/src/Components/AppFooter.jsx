var React = require('react');

var AppFooter = React.createClass({

	handleViewHistory:function(){
		window.open('http://webarchive.xyz');
	},

	render: function(){
		return(
			<div className="appFooter">
				<ul>
					<li>
						<a href="#AddFriend" className="addFriendButton"> <i className="fa fa-plus-square"></i> Add Friend</a>
					</li>
					<li>
						<a href="#" className="viewHistoryButton" onClick={this.handleViewHistory}><i className="fa fa-history"></i> View History</a>
					</li>
					<li>
						<a href="#" className="sendButton"><i className="fa fa-paper-plane-o"></i> Send</a>
					</li>
				</ul>
			</div>
			);
	}
});

module.exports = AppFooter;