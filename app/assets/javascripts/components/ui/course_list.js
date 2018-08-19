import React, { Component } from 'react';
import Course from './course.js';

class CourseList extends Component {
	componentDidMount() {
		var clientHeight = document.getElementsByClassName('course-listings')[0].clientHeight;

		window.addEventListener('scroll', function() {
			if((window.innerHeight + window.scrollY) >= (clientHeight+400)) {
				document.getElementsByClassName('next_page')[0].click();
			}
		});
	}
	listCourses(courses) {
		var coursesCombined = [];
		let int = 0;

		for (let index = 0; index < courses.length; index++) {
			coursesCombined.push(
				<Course courseid={courses[index].course_id} colorNumber={courses[index].color_number} position={index} key={index} />
			);
		}

		return coursesCombined;
	}
	render() {
		return (
			<div className="course-listings">
				{this.listCourses(this.props.courses)}
			</div>
		)
	}
}

export default CourseList;
