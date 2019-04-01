import React, { Component } from 'react';
import Course from './course.js';
import Loadinggif from './_loading_gif.js';
import { eventListenerMacro } from '../helpers/event_listeners.js';
import { sanitization } from '../input_sanitization.js';

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

		if (this.props.coursesUser != null) {
			let allCourses = document.getElementById('course-list');
			let userCourses = document.getElementById('enrolled-courses');
			let userCoursesList = document.getElementById('course-list-user');

			userCourses.addEventListener('click', function() {
				allCourses.classList.toggle('change');
				userCourses.classList.toggle('change');
				userCoursesList.classList.toggle('change');
			});
		}

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

		// need restriction for limiting HTTP requests
		const addDropCourse = (enrollment) => {
			let filterString = enrollment.match(/[^-]*-[^-]*/)[0];

			let courseCredentials = {
				course: {
					course_name: sanitization(filterString)
				}
			};

			$.ajax({
				type: "POST",
				url: "/courses",
				data: courseCredentials,
				success: function(data, textStatus, jqXHR) {
					console.log("Course add or remove; submission successful.");
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log("Course add or remove; submission unsuccessful.");
				}
			});

			if (enrollment.includes("Unenrolled")) {
				this.props.decrementCourseCount(this.props.coursesUserCount);
				this.props.decrementCourse(filterString);
			}
			else {
				this.props.incrementCourseCount(this.props.coursesUserCount);
				this.props.incrementCourse(filterString);
			}
		}

		eventListenerMacro(`${enrolledCourses} ${unenrolledCourses}`, 'click', function(e) {
			addDropCourse(this.id);
		});

		eventListenerMacro('cat-selector sort-selector level-selector', 'change', function() {
			window.location = `/courses_list/${catChange.value}/${sortChange.value}/${levelChange.value}`;
		});
	}
	listCourses(courses) {
		let coursesCombined = [];

		if (courses != null) {
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
		}

		return coursesCombined;
	}
	coursesEnrolled(courses, count) {
		if (courses != null) {
			return (
				<div id="enrolled-courses" className="no-outline">
					<p>Courses <div id="enrolled-number">{count}</div></p>
				</div>
			)
		}
	}
	isPaginateDone(num) {
		if (num % 15 == 0) {
			return (
				<Loadinggif />
			)
		}
	}
	render() {
		const { courses,courseTypes,courseLevels,sort,coursesUser,coursesUserCount, incrementCourseCount, decrementCourseCount, incrementCourse, decrementCourse } = this.props;
		return (
			<div className="course-listings">
				{this.coursesEnrolled(this.props.coursesUser,this.props.coursesUserCount)}
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
					<br/>
					<div id="course-list">
						{this.listCourses(courses)}
						{this.isPaginateDone(courses.length)}
					</div>
					<div id="course-list-user">
						{this.listCourses(coursesUser)}
					</div>
			</div>
		)
	}
}

export default CourseList;
