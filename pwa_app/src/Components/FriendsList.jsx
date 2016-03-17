var React = require('react');
var Friend = require('./Friend');

var FriendsList = React.createClass({

	propTypes: {
		friends: React.PropTypes.array.isRequired
	},
	render: function(){
		console.log(this.props.friends);
		var friendslistfetched = this.props.friends.map(
					function(item){
						return(<Friend key={item.uid} friendName={item.name} friendType={item.type} uid={item.uid} />);
					}
					,this);
		return(
				<div className="friendsList">
					<ul>
						<span className="friendsListTitle">Friends List</span>
						{friendslistfetched}
					</ul>
				</div>
			);
	}
});



module.exports = FriendsList;



//  Search bar
// 					<form className="searchbar" action="search">
// 						<input type="text" name="search" placeholder=" search here ..."/>
// 					</form>