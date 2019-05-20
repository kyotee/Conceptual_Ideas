import React, { Component } from 'react';
import apps from '../json_data/applications.js';

class UserApplications extends Component {
	applicationBoxes() {
		let boxes = [];

		for (let index = 0; index < Object.keys(apps.app).length; index++) {
			boxes.push(
				<div className="boxes" onClick={() => { window.location = `/${apps.app[parseInt(index)].route}` }} key={index}>
					<div className="header-apps">
						<p>{apps.app[index].name}</p>
					</div>
					<div className="image-apps" style={{ backgroundColor: apps.app[index].color }}>
						 <div className="idea-icon-apps"></div>​
					</div>
					<div className="describe-apps">
						<p>{apps.app[index].description}</p>
					</div>
					<div className="button-apps">
						<div className="button-apps-container">
							<ActionButton text={"See Feature"} />
						</div>
					</div>
				</div>
			);
		}

		// push new (separate) Node.js (with Express) project
		boxes.push(
			<div className="boxes" onClick={() => { window.open('https://conceptual-ideas-node-js.herokuapp.com/', '_blank') }} key={6}>
				<div className="header-apps">
					<p>Node.js (with Express) App</p>
				</div>
				<div className="image-apps" style={{ backgroundColor: "#CCFFE5" }}>
					 <div className="idea-icon-apps"></div>​
				</div>
				<div className="describe-apps">
					<p>Independent features created with another application consisting of different technologies.</p>
				</div>
				<div className="button-apps">
					<div className="button-apps-container" id={"box-"+6}>
						<ActionButton text={"See Feature"} />
					</div>
				</div>
			</div>
		);

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

export default UserApplications;
