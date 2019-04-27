import React, { Component } from 'react';

class SideNavigationBar extends Component {
	constructor(props) {
		super(props);

		this.state = {	
			collasp: false
		};

		this.featureDropdown = this.featureDropdown.bind(this);
	}
	componentDidMount() {
		let toggleSnow = document.getElementById("toggle-snow");
		let snowFall = document.querySelector("#snowy");
		let penguinGlide = document.querySelector("#penguin-gif");

		toggleSnow.addEventListener("click", function(){
			snowFall.classList.toggle('snow');
			penguinGlide.classList.toggle('snow');
		});
	}
	featureDropdown() {
		this.setState({ collasp: !this.state.collasp });
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
	monitoring(admin) {
		if (admin == true) {
			return (
				<div>
					<a href="/user_monitoring"><div className="idea-dropdown"></div>&nbsp;&nbsp;&nbsp;&nbsp;User Monitoring</a>
				</div>
			)
		}
		else {
			return (
				<div></div>
			)
		}
	}
	render() {
		const { signedin, admin } = this.props;
	    let dropdownMovement;
	    let arrowRotate;

	    if (this.state.collasp) {
	    	dropdownMovement = { 
				display: "none",
			    backgroundColor: "#e3e7ea"
	      	};

	    	arrowRotate = { 
				WebkitTransform: "rotate(180deg)",
			    transform: "rotate(180deg)"
	      	};
	    }
		return (
			<div>
				<div id="side-navigate">
					{this.loggedin()}
					<button id="dropdown-button" onClick={this.featureDropdown}>Applications
						<div id="arrow-icon" style={arrowRotate}>↑</div>
					</button>
					<div id="dropdown-content" style={dropdownMovement}>
						<a href="/signup"><div className="idea-dropdown"></div>&nbsp;&nbsp;&nbsp;&nbsp;Sign up Form</a>
						<a href="/image_differences"><div className="idea-dropdown"></div>&nbsp;&nbsp;&nbsp;&nbsp;Image Differences</a>
						{this.monitoring(admin)}
						<a href="/chatter"><div className="idea-dropdown"></div>&nbsp;&nbsp;&nbsp;&nbsp;Chatter</a>
						<a href="/courses_list/All/Ascending/AllLevels"><div className="idea-dropdown"></div>&nbsp;&nbsp;&nbsp;&nbsp;Courses</a>						
						<a href="/bids"><div className="idea-dropdown"></div>&nbsp;&nbsp;&nbsp;&nbsp;Item Bidding</a>												
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
	signedin: PropTypes.bool.isRequired,
	admin: PropTypes.bool.isRequired
};

export default SideNavigationBar;
