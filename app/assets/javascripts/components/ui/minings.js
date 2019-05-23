import React, { Component } from 'react';

class Minings extends Component {
	render() {
		return (
			<div>
				<div className="app-title-space">
					<div className="app-titles">
						<div id="idea-icon-title"></div>
						<p className="app-title">Data Mining</p>
					</div>
				</div>
				<div onClick={() => { window.location = "/minings/heart_disease.pdf" }}>
					<ActionButton text={"Execute R Script"} />
				</div>
			</div>
		)
	}
}

export default Minings;
