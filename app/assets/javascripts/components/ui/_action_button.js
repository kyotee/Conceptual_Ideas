import React, { Component } from 'react';

class ActionButton extends Component {
	constructor(props) {
		super(props);

		this.state = {	
			enlarged: false
		};

		this.buttonEnlarger = this.buttonEnlarger.bind(this);
		this.buttonNormal = this.buttonNormal.bind(this);
	}
	buttonEnlarger() {
		this.setState({ enlarged: true });
	}
	buttonNormal() {
		this.setState({ enlarged: false });
	}
	render() {
	    let buttonMovement;

	    if (this.state.enlarged) {
	    	buttonMovement = { 
	      		transition: "transform .0.5s",
	      		transform: "scale(1.1)"
	      	}
	    }

		return (
			<button className="img-button" style={buttonMovement} onMouseOver={this.buttonEnlarger} onMouseOut={this.buttonNormal}>{this.props.text}</button>
		)
	}
}

ActionButton.propTypes = {
	text: PropTypes.string.isRequired
};

export default ActionButton;
