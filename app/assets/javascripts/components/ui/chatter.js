import React, { Component, PropTypes } from 'react';
import { sanitization } from '../input_sanitization.js';

class Chatter extends Component {
	constructor(props) {
		super(props);

		this.state = {	
			input: ""
		};

		this.chatMessages = this.chatMessages.bind(this);
		this.newMessage = this.newMessage.bind(this);
		this.newMessageEnter = this.newMessageEnter.bind(this);
	}
	componentDidMount() {
		let scroller = document.getElementById("chatbox");
		scroller.scrollTop = scroller.scrollHeight;
	}
	chatMessages(e) {
		this.setState({ input: e.target.value });
	}
	newMessage() {
		let messageCredentials = {
			chatter: {
				message: sanitization(this.state.input),
				username: this.props.username,
				user_id: this.props.user_id
			}
		};

		this.setState({ input: '' });

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
	newMessageEnter(e) {
		let key = e.which || e.keyCode;

		if (e.key === 'Enter')
			this.newMessage();
	}
	userMessages(messages) {
		let rows = [];

		for (let i = 0; i < messages.length; i++) {
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
					<h2>🍺 A Beering Conversation</h2>
				</div>
				<div id="chatbox">
      				{this.userMessages(this.props.messages)}
	      		</div>
		      	<div id="chatbox-submit">
					<div id="message-input">
						<input id="msg-input" value={this.state.input} onChange={this.chatMessages} onKeyPress={this.newMessageEnter} type="text" name="message"></input>
					</div>
					<div id="submit-message" onClick={this.newMessage}>
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
