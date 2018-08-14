import React, { Component } from 'react';

class ActionButton extends Component {
	componentDidMount() {
		var detectButton = document.getElementsByClassName('img-button')[0];

		detectButton.addEventListener('mouseover', function() {
			detectButton.style.transition = "transform .0.5s";
			detectButton.style.transform = "scale(1.1)";
		});

		detectButton.addEventListener('mouseout', function() {
			detectButton.style.transition = "transform .0.5s";
			detectButton.style.transform = "scale(1)";
		});
	}
	render() {
		return (
			<button className="img-button">{this.props.text}</button>
		)
	}
}

ActionButton.propTypes = {
	text: PropTypes.string
};

export default ActionButton;
