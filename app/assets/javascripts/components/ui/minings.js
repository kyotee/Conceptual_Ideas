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
				<div id="mining-def">
					<p>This feature utilizes the integrated R programming language to predict 
					    patterns and rules associated to heart disease. The dataset (and associated information) is obtained&nbsp; 
					    <a href="https://archive.ics.uci.edu/ml/datasets/Heart+Disease" id="mining-link" target="_blank">
					    <u>here</u></a>:
						<iframe id="mining-ref" src="https://archive.ics.uci.edu/ml/datasets/Heart+Disease" height="100%" width="100%">
							<p>Your browser does not support iframes.</p>
						</iframe>
					    which consists of actual data samples accumulated from Cleveland, Ohio. Clicking the button below 
					    will execute data mining script and then render a PDF of results found.
                    </p>
					<div id="mining-button" onClick={() => { window.location = "/minings/heart_disease.pdf" }}>
						<ActionButton text={"Execute R Script"} />
					</div>
				</div>
			</div>
		)
	}
}

export default Minings;
