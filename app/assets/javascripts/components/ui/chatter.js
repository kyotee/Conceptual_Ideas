import React, { Component, PropTypes } from 'react';

class Chatter extends Component {
	componentDidMount() {
		var submit = document.getElementById('submit-message');

		submit.addEventListener('click', function() {
			var messageCredentials = {
				chatter: {
					  message: document.getElementById('message-input').value,
					  user_id: document.getElementById('user-id-input').value
					}
			};

			$.ajax({
				type: "POST",
				url: "/chatters",
				data: messageCredentials,
				success: function(data, textStatus, jqXHR) {
					console.log("Message creation; submission successful.");
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log("Message creation; submission unsuccessful.");
				}
			});
		});
	}
	userMessages(messages) {
		var rows = [];

		for (var i = 0; i < messages.length; i++) {
			rows.push(
				<p>{messages[i].user_id} {messages[i].message}</p>
			);		
		}
		return (
      		<div id="chatbox">
				{rows}
			</div>
		)
	}	
  	render() {
	    return (
	        <div>
				<div className="app-title-space">
					<div className="app-titles">
						<div id="idea-icon-title"></div>
						<p className="app-title">Chatter</p>
					</div>
				</div>
	      		{this.userMessages(this.props.messages)}
		      	<div id="input-chatbox">
					<input id="message-input" type="text" name="message"></input><br/>
					<input id="user-id-input" type="text" name="user-id"></input><br/>
					<p id="submit-message">SUBMIT</p>
		      	</div>
	        </div>
	    );
	}
}

Chatter.propTypes = {
	messages: PropTypes.array
};

export default Chatter;
