import React, { Component } from 'react';

class NavigationBar extends Component {
	constructor(props) {
		super(props);

		this.visitSignup = this.visitSignup.bind(this);
	}
	visitHome() {
		window.location = "/";
	}
	visitSignup() {
		if (this.props.signedin === false)
			window.location = "/signup";
	}
	loggedin() {
		if(this.props.signedin === false) {
			return (
				<div id="login-signup">
					<p id="signing-up" onClick={this.visitSignup}>Sign up</p>
					<p><a href="/login" id="signin_link">Sign in</a></p>
				</div>
			)
		}
	}
	render() {
		const { signedin,admin } = this.props;
		return (
			<div id="nav">
				<SandwichNavigationRedux signedin={signedin} admin={admin} />
				<div id="name-container" onClick={this.visitHome}>
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
	signedin: PropTypes.bool.isRequired,
	admin: PropTypes.bool.isRequired
};

export default NavigationBar;
