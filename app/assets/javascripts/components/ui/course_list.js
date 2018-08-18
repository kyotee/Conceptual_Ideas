import React, { Component } from 'react';
import courses from '../json_data/courses.js';

class CourseList extends Component {
	classes() {
		var classList = [];

		for (let index = 0; index < Object.keys(courses.classes).length; index++) {
			classList.push(
				<p>{courses.classes[index].course}</p>
			);
		}

		return classList;
	}
	render() {
		return (
			<div>
				{this.classes()}
			</div>
		)
	}
}

export default CourseList;
