import React, { Component } from 'react';
import ActionButton from './_action_button.js';
import Loadinggif from './_loading_gif.js';
import { eventListenerMacro } from '../helpers/event_listeners.js';

class ImageDifferences extends Component {
	constructor(props) {
		super(props);
	}
	focusView(imgLrg, img1, img2, imgRes, innerBody, body) {
	    document.body.scrollTop = 0;
	    document.documentElement.scrollTop = 0;
		imgLrg.style.display = "block";
		img1.style.opacity = "0.3";
		img2.style.opacity = "0.3";
		imgRes.style.opacity = "0.3";
		innerBody.classList.toggle('slider');
		body.classList.toggle('slide');
	}
	focusOut(innerBody, body, imgLrg1, imgLrg2, img1, img2, imgLrgResult) {
		innerBody.classList.toggle('slider');
		body.classList.toggle('slide');
		imgLrg1.style.display = "none";
		imgLrg2.style.display = "none";
		img1.style.opacity = "";
		img2.style.opacity = "";
		imgLrgResult.style.opacity = "";
	}
	componentDidMount() {
		let outNavey = document.getElementById('inner-body');
		let wholeBody = document.getElementsByTagName('body')[0];
		let img1 = document.getElementById('img-1');
		let img2 = document.getElementById('img-2');
		let detectButton = document.getElementsByClassName('img-button')[0];
		let beforeImg1 = document.getElementById('img-diff-contain-1');
		let afterImg2 = document.getElementById('img-diff-contain-2');
		let imgResult = document.getElementById('difference-result');
		let exitImg1 = document.getElementById("exit-img-1");

		img1.addEventListener('click', function() {
			this.focusView(beforeImg1, img1, img2, imgResult, outNavey, wholeBody);
		}.bind(this));

		img2.addEventListener('click', function() {
			this.focusView(afterImg2, img1, img2, imgResult, outNavey, wholeBody);
		}.bind(this));

		// includes mobile support
		eventListenerMacro('inner-body', 'mousedown touchstart', function(e) {
			if(outNavey.classList.contains('slider') && 
			!beforeImg1.contains(e.target))
				this.focusOut(outNavey, wholeBody, beforeImg1, afterImg2, img1, img2, imgResult);
		}.bind(this));

		// includes mobile support
		eventListenerMacro('exit-img-1', 'click touchstart', function() {
			this.focusOut(outNavey, wholeBody, beforeImg1, afterImg2, img1, img2, imgResult);
		}.bind(this));

		if (detectButton != null) {
			detectButton.addEventListener('click', function() {
				window.location = "/image_differences_generate";
			});
		} else {
			document.getElementsByClassName("loading-container")[0].scrollIntoView();

			setTimeout(
			function() {
				document.getElementsByClassName("loading-container")[0].style.display = "none";
				document.getElementById("difference-result").style.display = "block";
			}, 4500);
		}
	}
	index_checker() {
		if(this.props.index === true) {
			return (
				<div className="img-margin">
					<ActionButton text={"Detect Differences"} />
				</div>
			)
		}
		else {
			return (
				<div>
					<br/><br/>
					<Loadinggif />
				</div>
			)
		}
	}
	render() {
		return (
			<div>
				<div className="app-title-space">
					<div className="app-titles">
						<div id="idea-icon-title"></div>
						<p className="app-title">Image Differences</p>
					</div>
				</div>
				<div id="img-compare">
					<div className="img-lining">
						<h2>Before Epic</h2>
						<div id="img-1"></div>
						<p>Sign up page before epic.</p>
					</div>
					<div className="img-lining">
						<h2>After Epic</h2>
						<div id="img-2"></div>
						<p>Sign up page after epic.</p>
					</div>
					{this.index_checker()}
				</div>
				<div id="img-diff-contain-1">
					<div id="exit-img-1">Ⓧ</div>
				</div>
				<div id="img-diff-contain-2">
					<div id="exit-img-2">Ⓧ</div> 				
				</div>
				<div id="difference-result"></div>
			</div>
		)
	}
}

ImageDifferences.propTypes = {
	index: PropTypes.bool.isRequired
};

export default ImageDifferences;
