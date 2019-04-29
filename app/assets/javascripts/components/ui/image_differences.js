import React, { Component } from 'react';
import ActionButton from './_action_button.js';
import Loadinggif from './_loading_gif.js';
import { eventListenerMacro } from '../helpers/event_listeners.js';

class ImageDifferences extends Component {
	constructor(props) {
		super(props);

		this.state = {
			view: false,
			imgShowOne: false,
			imgShowTwo: false
		};

		this.seeImage = this.seeImage.bind(this);
		this.hideImage = this.hideImage.bind(this);
	}
	componentDidMount() {
		let outNavey = document.getElementById('inner-body');
		let wholeBody = document.getElementsByTagName('body')[0];
		let detectButton = document.getElementsByClassName('img-button')[0];

		const setImage = (id) => {
			if (id === 'img-1') 
				this.setState({ imgShowOne: true });
			else
				this.setState({ imgShowTwo: true });
		}

		eventListenerMacro('img-1 img-2', 'click', function() {
			setImage(this.id);

		    document.body.scrollTop = 0;
		    document.documentElement.scrollTop = 0;
			outNavey.classList.toggle('slider');
			wholeBody.classList.toggle('slide');
		});

		const closeImage = () => {
			this.setState({ view: false,
							imgShowOne: false,
							imgShowTwo: false
			});

			outNavey.classList.toggle('slider');
			wholeBody.classList.toggle('slide');
		};

		eventListenerMacro('inner-body', 'mousedown touchstart', function() {
			if(outNavey.classList.contains('slider')) {
				closeImage();
			}
		});

		eventListenerMacro('exit-img-1', 'click touchstart', function() {
			closeImage();
		});

		if (this.props.index === true) {
			detectButton.addEventListener('click', function() {
				window.location = "/image_differences_generate";
			});
		} else {
			let loading = document.getElementsByClassName("loading-container")[0];
			let imgResult = document.getElementById('difference-result');

			loading.scrollIntoView();

			setTimeout(
			function() {
				loading.style.display = "none";
				imgResult.style.display = "block";
			}, 4500);
		}
	}
	seeImage() {
		this.setState({ view: true });
	}
	hideImage() {
		this.setState({ view: false });
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
	    let enlargeImageOne;
	    let enlargeImageTwo;
	    let dimOrgImage;

	    if (this.state.view) {
	    	dimOrgImage = {
	    		opacity: "0.3"
	    	};

	    	if (this.state.imgShowOne) {
		    	enlargeImageOne = {
		    		display: "block"
		    	};
		    }

	    	if (this.state.imgShowTwo) {
		    	enlargeImageTwo = {
		    		display: "block"
		    	};
		    }
	    }
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
						<div id="img-1" style={dimOrgImage} onClick={this.seeImage}></div>
						<p>Sign up page before epic.</p>
					</div>
					<div className="img-lining">
						<h2>After Epic</h2>
						<div id="img-2" style={dimOrgImage} onClick={this.seeImage}></div>
						<p>Sign up page after epic.</p>
					</div>
					{this.index_checker()}
				</div>
				<div id="img-diff-contain-1" style={enlargeImageOne}>
					<div id="exit-img-1">Ⓧ</div>
				</div>
				<div id="img-diff-contain-2" style={enlargeImageTwo}>
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
