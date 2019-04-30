import React, { Component } from 'react';

class StatusMessages extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return (nextprops.color != this.props.color && nextprops.message != this.props.message);
	}
	componentDidMount() {
		const { color,message } = this.props;
		let notify = document.getElementById('messages');
		let messageText = document.getElementById('message-positioning');

		if(color != null && message != null) {
			let map = new Map([["Blue", ["#7EC0EE", "#FFFFFF"]], ["Green", ["#b2ffb2", "#00cc00"]], ["Red", ["#ff7f7f", "#ff1919"]], ["Yellow", ["#ffffb2", "#b2b200"]]]);
			
			notify.style.background = map.get(this.props.color)[0];
			messageText.style.color = map.get(this.props.color)[1];

			setTimeout(function() {
				messageText.classList.toggle('fade');
			}, 1800);

			setTimeout(function() {
				notify.className = 'disappear';
			}, 9000);
		}
	}
	render() {
		const { message } = this.props;
		return (
			<div id="messages">
				<p id="message-positioning">{message}</p>
			</div>
		)
	}
}

StatusMessages.propTypes = {
	color: PropTypes.string.isRequired,
 	message: PropTypes.string.isRequired
};

export default StatusMessages;
