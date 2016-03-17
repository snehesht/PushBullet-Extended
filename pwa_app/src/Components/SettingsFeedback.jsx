var React = require("react");


var SettingsFeedback = React.createClass({
	render: function(){
		return(
				<div className="feedbackContainer">
					<span>Feedback</span>
					<form action="">
						<input type="text" name="feedbackInput" />
						<p> Please tell us your overall experience with the app, Select one of the check boxes below. </p>
						<input type="radio" name="overallExperience" id="good" /><span></span><label for = "good">Good</label>
						<input type="radio" name="overallExperience" id="ok" /><span></span><label for = "good">Ok</label>
						<input type="radio" name="overallExperience" id="bad" /><span></span><label for = "good">Bad</label>
						<a href="" className="FeedbackButton">Send Feedback</a>
					</form>
				</div>
			);
	}

});

module.exports = SettingsFeedback;