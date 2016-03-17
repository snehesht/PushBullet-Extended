var React = require('react');
var FriendsList = require('./FriendsList');

var AppBody = React.createClass({

	// componenet will mount 
	// fetch friends list from database
	getIntialState: function(){
		return{
			title:this.props.pageTitle,
			url:this.props.pageURL
		};
	},
	getDefaultProps: function(){

	},

	componentWillMount: function(){
		var friendsListData = [
		{
			"name":"Save to DataBase",
			"email":"snehesh85@gmail.com",
			"type":"database",
			"uid":"CR9PYIGI555KZUDWR3N7853NC78QR2CC",
			"interactionCount":100000
		},
		{
			"name":"Harsha",
			"email":"harsha@localhost.com",
			"type":"Friend",
			"uid":"CR9PYIGIB9CKZUDWR3NX5GSNC78QR2CC",
			"interactionCount":12
		},
		{
			"name":"Deepak",
			"email":"dpk@localhost.com",
			"type":"Friend",
			"uid":"R9SNMS07ZXVTP3YGFFHOY4JI1WEM12RJ",
			"interactionCount":23	
		},
		{
			"name":"Nexus 5",
			"email":"snehesh85@gmail.com-nexus5",
			"type":"PersonalDevice",
			"uid":"USVJ1DD33CFBL4HPPL3UNR9ONADE363P",
			"interactionCount":64
		},
		{
			"name":"Windows Chrome",
			"email":"snehesh85@gmail.com-windowschrome",
			"type":"PersonalDevice",
			"uid":"TZLH1J0S1PCFT1529UNYD82O8BNEBUWU",
			"interactionCount":36
		},
		{
			"name":"The Room",
			"email":"snehesh85@gmail.com-theroom",
			"type":"Group",
			"groupList":["CR9PYIGIB9CKZUDWR3NX5GSNC78QR2CC","R9SNMS07ZXVTP3YGFFHOY4JI1WEM12RJ","FYR1G74DZ37E6VHVAEZ4JBQVJYH1FSFL"],
			"uid":"E9BE4Z8DCQFHVRBAW5JDLZ5DKG2YONV8",
			"interactionCount":22
		},
		{
			"name":"Harsha",
			"email":"harsha@localhost.com",
			"type":"Friend",
			"uid":"CR9PYIGIB9CKZUDWR3NX5GSNC78QR2CD",
			"interactionCount":12
		},
		{
			"name":"Deepak",
			"email":"dpk@localhost.com",
			"type":"Friend",
			"uid":"R9SNMS07ZXVTP3YGFFHOY4JI1WEM12RK",
			"interactionCount":23	
		},
		{
			"name":"Nexus 5",
			"email":"snehesh85@gmail.com-nexus5",
			"type":"PersonalDevice",
			"uid":"USVJ1DD33CFBL4HPPL3UNR9ONADE363O",
			"interactionCount":64
		},
		{
			"name":"Windows Chrome",
			"email":"snehesh85@gmail.com-windowschrome",
			"type":"PersonalDevice",
			"uid":"TZLH1J0S1PCFT1529UNYD82O8BNEBUWI",
			"interactionCount":36
		},
		{
			"name":"The Room",
			"email":"snehesh85@gmail.com-theroom",
			"type":"Group",
			"groupList":["CR9PYIGIB9CKZUDWR3NX5GSNC78QR2CD","R9SNMS07ZXVTP3YGFFHOY4JI1WEM12RK","USVJ1DD33CFBL4HPPL3UNR9ONADE363O"],
			"uid":"E9BE4Z8DCQFHVRBAW5JDLZ5DKG2YONV5",
			"interactionCount":22
		}

		];
		this.setState({friendslist:friendsListData});

	},
	render: function(){
		return(
				<div className="appBody">
					<form action="">
						<div className="formElement">
							Title:  <input type="text" name="pageTitle" placeholder="..." defaultValue={this.state.title} />
						</div>
						<div className="formElement">
							Link  : <input type="text" name="pageURL" defaultValue={this.state.url} />
						</div>
						<div className="formElement">
							Tags  : <input type="text" name="tagsList" placeholder="saperate tags by comma"></input>
							<button>Add Tags</button>
						</div>
					</form>

				<FriendsList friends={this.state.friendslist}/>

				</div>
			);
	}
});

module.exports = AppBody;