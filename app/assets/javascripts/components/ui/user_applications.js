import React, { Component } from 'react';
import ActionButton from './_action_button.js';
// import myImage from '../../../images/idea.svg';  -- parsing problem; imgs called via css now

class UserApplications extends Component {
	componentDidMount() {
		for (let index = 1; index < Object.keys(apps.app).length; index++) {
			let detectButton = document.getElementById(`box-${index}`);

			detectButton.addEventListener('mouseover', function() {
				detectButton.style.transition = "transform .0.5s";
				detectButton.style.transform = "scale(1.1)";
			});

			detectButton.addEventListener('mouseout', function() {
				detectButton.style.transition = "transform .0.5s";
				detectButton.style.transform = "scale(1)";
			});
		}
	}
	applicationBoxes() {
		var boxes = [];

		for (let index = 0; index < Object.keys(apps.app).length; index++) {
			boxes.push(
				<div className="boxes" onClick={() => { window.location = `/${apps.app[parseInt(index)].route}` }} key={index}>
					<div className="header-apps">
						<p>{apps.app[index].name}</p>
					</div>
					<div className="image-apps">
						 <div className="idea-icon-apps"></div>​
					</div>
					<div className="describe-apps">
						<p>{apps.app[index].description}</p>
					</div>
					<div className="button-apps">
						<div className="button-apps-container" id={"box-"+index}>
							<ActionButton text={"See Feature"} />
						</div>
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
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			route: "signup"
		},
		{
			name: "Image Differences",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			route: "image_differences"
		},
		{
			name: "App Template",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			route: "image_differences"
		},
		{
			name: "App Template",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			route: "image_differences"
		},
		{
			name: "App Template",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			route: "image_differences"
		},
		{
			name: "App Template",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			route: "image_differences"
		}
	]
};

export default UserApplications;
