import React, { Component, PropTypes } from 'react';
import { sanitization } from '../input_sanitization.js';

class Chatter extends Component {
	constructor(props) {
		super(props);

		this.newMessage = this.newMessage.bind(this);
		this.newMessageEnter = this.newMessageEnter.bind(this);
	}
	componentDidMount() {
		let scroller = document.getElementById("chatbox");

		scroller.scrollTop = scroller.scrollHeight;
	}
	newMessage() {
		let messageCredentials = {
			chatter: {
				message: sanitization(this.props.message),
				username: this.props.username,
				user_id: this.props.user_id
			}
		};

		this.props.updateMessage('');

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
		this.props.updateMessage(e.target.value);

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
  		const { messages,message } = this.props;
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
      				{this.userMessages(messages)}
	      		</div>
		      	<div id="chatbox-submit">
					<div id="message-input">
						<input id="msg-input" value={message} onChange={this.newMessageEnter} type="text" name="message"></input>
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
	message: PropTypes.string.isRequired,
	messages: PropTypes.array.isRequired,
	username: PropTypes.string.isRequired,
	user_id: PropTypes.number.isRequired
};

export default Chatter;
