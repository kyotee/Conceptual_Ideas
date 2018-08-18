import React, { Component } from 'react';

class CourseList extends Component {
	listCourses(courses) {
		var coursesCombined = [];

		for (let index = 0; index < courses.length; index++) {
			coursesCombined.push(
				<p>{courses[index].course_id}</p>
			);
		}

		return coursesCombined;
	}
	render() {
		return (
			<div>
				{this.listCourses(this.props.courses)}
			</div>
		)
	}
}

export default CourseList;
