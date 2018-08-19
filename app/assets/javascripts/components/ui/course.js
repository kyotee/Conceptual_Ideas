import React, { Component } from 'react';
import colors from '../json_data/course_colors.js';

class Course extends Component {
	componentDidMount() {
		document.getElementsByClassName('tab')[this.props.position].style.backgroundColor = colors.color[this.props.colorNumber].hex;
	}
	render() {
		return (
			<div className="course">
				<div className="tab">
					<p>{this.props.courseid}</p>
				</div>
			</div>
		)
	}
}

export default Course;
