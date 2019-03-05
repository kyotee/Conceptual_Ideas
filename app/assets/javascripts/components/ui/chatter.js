import React, { Component, PropTypes } from 'react';

class Chatter extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		var scroller = document.getElementById("chatbox");
		scroller.scrollTop = scroller.scrollHeight;
		var submit = document.getElementById('submit-message');

		submit.addEventListener('click', function() {
			var messageCredentials = {
				chatter: {
					  message: document.getElementById('msg-input').value,
					  username: this.props.username,
					  user_id: this.props.user_id
					}
			};

			document.getElementById('msg-input').value = '';

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
		}.bind(this));

		// case where enter key is pressed; needs refactoring
		document.getElementById('msg-input').addEventListener("keypress", function(e) {
			var key = e.which || e.keyCode;

			if (e.keyCode == 13) {
				var messageCredentials = {
					chatter: {
						  message: document.getElementById('msg-input').value,
						  username: this.props.username,
						  user_id: this.props.user_id
						}
				};

				document.getElementById('msg-input').value = '';

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
			}
		}.bind(this));
	}
	userMessages(messages) {
		var rows = [];

		for (var i = 0; i < messages.length; i++) {
			rows.push(
				<div className="word-holder">
					<div className="no-word-overflow">
						<small><b>{messages[i].username}</b></small>
						<p className="message-mod">{messages[i].message}</p>
					</div>
				</div>
			);		
		}
		return (
			<div>
				{rows}
			</div>
		)
	}
	submission() {
		var scroller = document.getElementById("chatbox");
		scroller.scrollTop = scroller.scrollHeight;
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
				<div id="message-title">
					<h2>A Beering Conversation</h2>
				</div>
				<div id="chatbox">
      				{this.userMessages(this.props.messages)}
	      		</div>
		      	<div id="chatbox-submit">
					<div id="message-input">
						<input id="msg-input" type="text" name="message"></input>
					</div>
					<div id="submit-message">
						<p>SEND</p>
					</div>
		      	</div>
	        </div>
	    );
	}
}

Chatter.propTypes = {
	messages: PropTypes.array
};

export default Chatter;
