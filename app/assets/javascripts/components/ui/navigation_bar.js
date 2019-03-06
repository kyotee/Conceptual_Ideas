import React, { Component } from 'react';
import SandwichNavigation from './sandwich_navigation.js';

class NavigationBar extends Component {
	componentDidMount() {
		document.getElementById('name-container').addEventListener("click", function() {
			window.location = "/";
		});

		if (this.props.signedin == false) {
			document.getElementById('signing-up').addEventListener("click", function() {
				window.location = "/signup";
			});
		}
	}
	loggedin() {
		if(this.props.signedin == false) {
			return (
				<div id="login-signup">
					<p id="signing-up">Sign up</p>
					<p><a href="/login" id="signin_link">Sign in</a></p>
				</div>
			)
		}
	}
	render() {
		return (
			<div id="nav">
				<SandwichNavigation signedin={this.props.signedin} admin={this.props.admin} />
				<div id="name-container">
					<div id="idea-icon"></div>
					<p id="title1">Conceptual</p>
					<p id="title2">Ideas</p>
				</div>

				{this.loggedin()}
			</div>
		)
	}
}

NavigationBar.propTypes = {
	signedin: PropTypes.bool,
	admin: PropTypes.bool
};


export default NavigationBar;
