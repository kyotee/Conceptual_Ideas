import React, { Component } from 'react';
import Course from './course.js';
import Loadinggif from './_loading_gif.js';
import { eventListenerMacro } from '../helpers/event_listeners.js';

class CourseList extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		let clientHeight = document.getElementsByClassName('course-listings')[0].clientHeight;
		let mobileFilter = document.getElementById('mobile-filter');
		let catChange = document.getElementById('cat-selector');
		let sortChange = document.getElementById('sort-selector');
		let levelChange = document.getElementById('level-selector');
		let enrolledCourses = this.props.courses.map(({ course_id }) => course_id).toString().replace(/,/g, ' ');
		let unenrolledCourses = this.props.courses.map(({ course_id }) => course_id).toString().replace(/,/g, '-Unenrolled ');

		catChange.value = this.props.courseTypes;
		levelChange.value = this.props.courseLevels;
		sortChange.value = this.props.sort;

		window.addEventListener('scroll', function() {
			if (window.scrollY >= (clientHeight-400))
				document.getElementsByClassName('next_page')[0].click();
		});

		mobileFilter.addEventListener('click', function() {
			mobileFilter.classList.toggle('change');
		 	document.getElementById('filter-position').classList.toggle('change');
		});

		eventListenerMacro(`${enrolledCourses} ${unenrolledCourses}`, 'click', function(e) {
			alert(this.id);
		});

		eventListenerMacro('cat-selector sort-selector level-selector', 'change', function() {
			window.location = `/courses_list/${catChange.value}/${sortChange.value}/${levelChange.value}`;
		});
	}
	listCourses(courses) {
		let coursesCombined = [];

		for (let index = 0; index < courses.length; index++) {
			coursesCombined.push(
				<Course 
					courseId={courses[index].course_id}
					description={courses[index].description}
					professor={courses[index].professor}
					count={courses[index].count}
					capOff={courses[index].cap_off}
					prerequisites={courses[index].prerequisites}
			        courseType={courses[index].course_type}
			        startDate={courses[index].start_date}
			        endDate={courses[index].end_date}
			        position={index}
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
		const { courses,courseTypes,courseLevels,sort,coursesUser,coursesUserCount } = this.props;
		return (
			<div className="course-listings">
				<p id="mobile-filter" className="no-outline">🔎</p>

				<div id="filter-position">
					<select id="cat-selector">  
						<option value="All">All Categories</option>
						<option value="Comp">Computer Science</option>
						<option value="Engl">English</option>
						<option value="Fine">Fine Arts</option>
						<option value="Geog">Geography</option>
						<option value="Hist">History</option>
						<option value="Math">Mathematics</option>
						<option value="Psyc">Psychology</option>
						<option value="Soci">Sociology</option>
					</select>
					<select id="level-selector">
						<option value="0">All Levels</option>
						<option value="1">100 Level</option>
						<option value="2">200 Level</option>
						<option value="3">300 Level</option>
						<option value="4">400 Level</option>
					</select>
					<select id="sort-selector">
						<option value="Ascending">Sort Low to High</option>
						<option value="Descending">Sort High to Low</option>
					</select>
				</div>
				{this.listCourses(courses)}
				{this.isPaginateDone(courses.length)}
			</div>
		)
	}
}

export default CourseList;
