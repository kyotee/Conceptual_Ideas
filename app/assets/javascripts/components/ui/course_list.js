import React, { Component } from 'react';
import Course from './course.js';
import Loadinggif from './_loading_gif.js';      // TODO: REMOVE TO COMPONENT.JS
import { eventListenerMacro } from '../helpers/event_listeners.js';
import { sanitization } from '../input_sanitization.js';

class CourseList extends Component {
	constructor(props) {
		super(props);

		this.optionChange = this.optionChange.bind(this);
		this.mobileOptions = this.mobileOptions.bind(this);
	}
	componentDidMount() {
		let clientHeight = document.getElementsByClassName('course-listings')[0].clientHeight;
		
		window.addEventListener('scroll', function() {
			if (window.scrollY >= (clientHeight-400))
				document.getElementsByClassName('next_page')[0].click();
		});





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
	}
	listCourses(courses, coursesOfUser, indexOffset) {
		let coursesCombined = [];

		for (let index = 0; index < courses.length; index++) {
			let isUserCourse = false;

			if (coursesOfUser.includes(courses[index].course_id)) 
				isUserCourse = true;

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
			        enrolled={isUserCourse}
			        position={index+indexOffset}
			        key={index+indexOffset}
			    />
			);
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
	optionChange(e) {
		let option = e.target.id;
		let value = e.target.value;
		let courseTypes = this.props.courseTypes;
		let sort = this.props.sort;
		let courseLevels = this.props.courseLevels;

		if (option === 'cat-selector') {
			courseTypes = value;
		} else if (option === 'level-selector') {
			courseLevels = value;
		} else if (option === 'sort-selector') {
			sort = value;
		}

		window.location = `/courses_list/${courseTypes}/${sort}/${courseLevels}`;
	}
	mobileOptions() {
		this.props.selectMobileOptions(!this.props.mobileOption);
	}
	render() {
		const { courses,courseTypes,courseLevels,sort,coursesUser,coursesUserCount,incrementCourseCount,decrementCourseCount,incrementCourse,decrementCourse } = this.props;
		let coursesOfUser = [];
		let searchIcon;
		let searchLayout;

		// current courses belonging to the user
		for (let index = 0; index < coursesUser.length; index++) {
			coursesOfUser.push(coursesUser[index].course_id);
		}

		if (this.props.mobileOption) {
			searchIcon = {
				backgroundColor: "yellow"
			};

			searchLayout = {
				display: "block"
			};
		}
		return (
			<div className="course-listings">
				{this.coursesEnrolled(this.props.coursesUser,this.props.coursesUserCount)}
					<p id="mobile-filter" className="no-outline" style={searchIcon} onClick={this.mobileOptions}>🔎</p>
					<div id="filter-position" style={searchLayout}>
						<select id="cat-selector" value={this.props.courseTypes} onChange={this.optionChange}>  
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
						<select id="level-selector" value={this.props.courseLevels} onChange={this.optionChange}>
							<option value="0">All Levels</option>
							<option value="1">100 Level</option>
							<option value="2">200 Level</option>
							<option value="3">300 Level</option>
							<option value="4">400 Level</option>
						</select>
						<select id="sort-selector" value={this.props.sort} onChange={this.optionChange}>
							<option value="Ascending">Sort Low to High</option>
							<option value="Descending">Sort High to Low</option>
						</select>
					</div>
					<br/>
					<div id="course-list">
						{this.listCourses(courses,coursesOfUser,0)}
						{this.isPaginateDone(courses.length)}
					</div>
					<div id="course-list-user">
						{this.listCourses(coursesUser,coursesOfUser,courses.length)}
					</div>
			</div>
		)
	}
}

export default CourseList;
