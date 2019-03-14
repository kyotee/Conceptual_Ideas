import React, { Component } from 'react';
import Course from './course.js';
import Loadinggif from './_loading_gif.js';

class CourseList extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		var clientHeight = document.getElementsByClassName('course-listings')[0].clientHeight;

		window.addEventListener('scroll', function() {
			if (window.scrollY >= (clientHeight-250))
					document.getElementsByClassName('next_page')[0].click();
		}.bind(this));
	}
	listCourses(courses) {
		var coursesCombined = [];
		let int = 0;

		for (let index = 0; index < courses.length; index++) {
			coursesCombined.push(
				<Course 
					courseid={courses[index].course_id}
					description={courses[index].description}
					professor={courses[index].professor}
					count={courses[index].count}
					cap_off={courses[index].cap_off}
					prerequisites={courses[index].prerequisites}
			        colorNumber={courses[index].color_number}
			        start_date={courses[index].start_date}
			        end_date={courses[index].end_date}
			        position={index}
			        recordid={courses[index].id}
			        key={index} 
			    />
			);
		}

		return coursesCombined;
	}
	isPaginateDone(num) {
		if (num % 15 == 0) {
			return (
				<Loadinggif />
			)
		}
	}
	render() {
		const { courses } = this.props;
		return (
			<div className="course-listings">
				<button id="hit">category</button>
				{this.listCourses(courses)}
				{this.isPaginateDone(courses.length)}
			</div>
		)
	}
}

export default CourseList;
