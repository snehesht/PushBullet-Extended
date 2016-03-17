var React = require('react');

var Friend = React.createClass({

	getInitialState: function(){
		return{
			checked: false
		};
	},
	propTypes: {
		friendName: React.PropTypes.string,
		friendType: React.PropTypes.string,
		uid: React.PropTypes.string
	},
	onClick: function(){
		console.log('Click Registered ' + this.props.friendName + ' '+ this.props.uid);
		this.setState({checked: true});
	},
	render: function(){
		if (this.state.checked == true){
			return(
				<li className="friendActive" onClick={this.onClick}>
					<a href="#" onClick={this.onClick}>{this.props.friendName}</a>
				</li>
			);
		} else {
			return(
				<li className="friend" onClick={this.onClick}>
					<a href="#" onClick={this.onClick}>{this.props.friendName}</a>
				</li>
			);
		}
	}

});

module.exports = Friend;