import React, { Component } from 'react';

class SideNavigationBar extends Component {
	componentDidMount() {
		document.getElementById("dropdown-button").addEventListener("click", function(){
			document.querySelector("#dropdown-content").classList.toggle('active');
			document.querySelector("#arrow-icon").classList.toggle('flip');
		});
		document.getElementById("toggle-snow").addEventListener("click", function(){
			document.querySelector("#snowy").classList.toggle('snow');
			document.querySelector("#penguin-gif").classList.toggle('snow');
		});
	}
	loggedin() {
		if(this.props.signedin == true) {
			return (
				<div>
					<a className="line-on-it" href="/logout" data-method="delete" id="signout_link">
						<div className="icon-dropdown drop-signout"></div>&nbsp;&nbsp;&nbsp;&nbsp;Sign out</a>
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
			<div>
				<div id="side-navigate">
					{this.loggedin()}
					<button id="dropdown-button">Applications
						<div id="arrow-icon">↑</div>
					</button>
					<div id="dropdown-content">
						<a href="/signup"><div className="idea-dropdown"></div>&nbsp;&nbsp;&nbsp;&nbsp;Sign up Form</a>
						<a href="/image_differences"><div className="idea-dropdown"></div>&nbsp;&nbsp;&nbsp;&nbsp;Image Differences</a>
						<a href="/courses_list"><div className="idea-dropdown"></div>&nbsp;&nbsp;&nbsp;&nbsp;Courses</a>
						<a href="/chatter"><div className="idea-dropdown"></div>&nbsp;&nbsp;&nbsp;&nbsp;Chatter</a>
					</div>
					<a id="top-line" href="/about"><div className="icon-dropdown drop-about"></div>&nbsp;&nbsp;&nbsp;&nbsp;About</a>
					<a href="/contact"><div className="icon-dropdown drop-contact"></div>&nbsp;&nbsp;&nbsp;&nbsp;Contact</a>
					<br/><br/>
					<a href="https://github.com/tamkylet/Conceptual_Ideas-tamkylet" target="_blank"><div className="github"></div></a>
					{/* Code reference: https://proto.io/freebies/onoff/ */}
					<div className="onoffswitch">
						<input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch"/>
						<label id="toggle-snow" className="onoffswitch-label" for="myonoffswitch">
							<span className="onoffswitch-inner"></span>
							<span className="onoffswitch-switch"></span>
						</label>
					</div>
				</div>
				<div id="penguin-gif"></div>
			</div>
		)
	}
}

SideNavigationBar.propTypes = {
	signedin: PropTypes.bool
};

export default SideNavigationBar;
