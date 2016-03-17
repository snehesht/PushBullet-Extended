// var React = require('react');
// var ReactDOM = require('react-dom');

// var App = React.createClass({
// 	render: function(){
// 		return (
// 			<H1>Hello World</h1>
// 			);
// 	}
// });

// ReactDOM.render(<App />, document.getElementById('mainContainer'));

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
	displayName: 'App',

	render: function render() {
		return React.createElement(
			'h1',
			null,
			'Hello World'
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById('mainContainer'));