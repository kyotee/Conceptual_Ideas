import React, { Component } from 'react';
import ActionButton from './_action_button.js';
// import myImage from '../../../images/idea.svg';  -- parsing problem

class UserApplications extends Component {
	componentDidMount() {
		var routes = [];

		for (var index = 0; index <  apps.app.length; index++) {
			routes.push(apps.app[index].route);

			document.getElementById(`box-${index}`).addEventListener("click", function() {
				console.log(index);
				// window.location = `/${routes[index]}`;
			});
		}
	}
	applicationBoxes() {
		var boxes = [];

		for (var index = 0; index < 20; index++) {
			boxes.push(
				<div className="boxes" id={"box-"+index} key={index}>
					<div className="header-apps">
						<p>Sign Up Form</p>
					</div>
					<div className="image-apps">
						 <div className="idea-icon-apps"></div>​
					</div>
					<div className="describe-apps">
						<p>button ewfewfew ewfewfew fqwq hehthtr wewfewf tyregew wdqwd</p>
					</div>
					<div className="button-apps">
						<ActionButton text={"See Feature"} />
					</div>
				</div>
			);
		}

		return boxes;
	}
	render() {
		return (
			<div id="applications">
				<ul>
					{this.applicationBoxes()}
				</ul>
			</div>
		)
	}
}

const apps = {
	"app": [
		{
			name: "Sign Up Form",
			image: "",
			description: "ello",
			route: "signup"
		},
		{
			name: "Image Differences",
			image: "",
			description: "ello",
			route: "image_differences"
		}
	]
};

export default UserApplications;
