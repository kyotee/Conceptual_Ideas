import React, { Component } from 'react';

class SideNavigationBar extends Component {
	componentDidMount() {
		document.getElementById("dropdown-button").addEventListener("click", function(){
			document.querySelector("#dropdown-content").classList.toggle('active');
			document.querySelector("#arrow-icon").classList.toggle('flip');
		});
	}
	loggedin() {
		if(this.props.signedin == true) {
			return (
				<div>
					<a className="line-on-it" href="/logout" data-method="delete" id="signout_link">
						<div className="icon-dropdown drop-signout"></div>&nbsp;&nbsp;&nbsp;&nbsp;Sign out</a>
					<div className="idea-dropdown"></div>
				</div>
			)
		} else {
			return (
				<div>
					<a href="/signup"><div className="icon-dropdown drop-signup"></div>&nbsp;&nbsp;&nbsp;&nbsp;Sign up</a>
					<a className="line-on-it" href="/login"><div className="icon-dropdown drop-signin"></div>&nbsp;&nbsp;&nbsp;&nbsp;Sign in</a>
				</div>
			)
		}
	}
	render() {
		return (
			<div id="side-navigate">
				{this.loggedin()}
				<button id="dropdown-button">Applications
					<div id="arrow-icon">↑</div>
				</button>
				<div id="dropdown-content">
					<a href="/signup"><div className="idea-dropdown"></div>&nbsp;&nbsp;&nbsp;&nbsp;Sign up Form</a>
					<a href="/image_differences"><div className="idea-dropdown"></div>&nbsp;&nbsp;&nbsp;&nbsp;Image Differences</a>
					<a href="/"><div className="idea-dropdown"></div>&nbsp;&nbsp;&nbsp;&nbsp;Application 3</a>
					<a href="/"><div className="idea-dropdown"></div>&nbsp;&nbsp;&nbsp;&nbsp;Application 4</a>
				</div>
				<a id="top-line" href="/"><div className="icon-dropdown drop-about"></div>&nbsp;&nbsp;&nbsp;&nbsp;About</a>
				<a href="/"><div className="icon-dropdown drop-contact"></div>&nbsp;&nbsp;&nbsp;&nbsp;Contact</a>
				<br/><br/>
				<a href="https://github.com/tamkylet/Conceptual_Ideas-tamkylet" target="_blank"><div className="github"></div></a>
			</div>
		)
	}
}

SideNavigationBar.propTypes = {
	signedin: PropTypes.bool
};

export default SideNavigationBar;
