import React, { Component } from 'react';
import colors from '../json_data/course_colors.js';

class Course extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		document.getElementsByClassName('tab')[this.props.position].style.backgroundColor = colors.color[this.props.colorNumber].hex;

		document.getElementsByClassName('click-me')[this.props.position].addEventListener("click", function() {
			document.getElementsByClassName('more-info')[this.props.position].classList.toggle('show');
		}.bind(this));
	}
	render() {
		return (
			<div className="course" id={"course-"+this.props.recordid}>
				<div className="tab">
					<p>{this.props.courseid}&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<i>A Boring Course</i></p>
				</div>
				<div>
					<p>{this.props.description}</p><br/>
				</div>
				<div>
					<p className="click-me">lol</p>
				</div>
				<div className="more-info">
					<p>hello</p>
					<p>world</p>
					<p>this</p>
					<p>is</p>
					<p>test</p>
				</div>
			</div>
		)
	}
}

export default Course;
