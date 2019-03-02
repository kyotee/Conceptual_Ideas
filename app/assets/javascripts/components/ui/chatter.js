import React, { Component, PropTypes } from 'react';

class Chatter extends Component {
	componentDidMount() {

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

		      	</div>
	        </div>
	    );
	}
}

Chatter.propTypes = {
	messages: PropTypes.array
};

export default Chatter;
