import React, { Component } from 'react';
import Course from './course.js';
import Loadinggif from './_loading_gif.js';

class CourseList extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		var clientHeight = document.getElementsByClassName('course-listings')[0].clientHeight;
		var mobileFilter = document.getElementById('mobile-filter');
		var catChange = document.getElementById('cat-selector');
		var sortChange = document.getElementById('sort-selector');
		var levelChange = document.getElementById('level-selector');

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

		catChange.addEventListener('change', function() {
			window.location = `/courses_list/${catChange.value}/${sortChange.value}/${levelChange.value}`;
		});

		levelChange.addEventListener('change', function() {
			window.location = `/courses_list/${catChange.value}/${sortChange.value}/${levelChange.value}`;
		});

		sortChange.addEventListener('change', function() {
			window.location = `/courses_list/${catChange.value}/${sortChange.value}/${levelChange.value}`;
		});
	}
	listCourses(courses) {
		var coursesCombined = [];

		for (let index = 0; index < courses.length; index++) {
			coursesCombined.push(
				<Course 
					courseid={courses[index].course_id}
					description={courses[index].description}
					professor={courses[index].professor}
					count={courses[index].count}
					capOff={courses[index].cap_off}
					prerequisites={courses[index].prerequisites}
			        courseType={courses[index].course_type}
			        startDate={courses[index].start_date}
			        endDate={courses[index].end_date}
			        position={index}
			        recordId={courses[index].id}
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
