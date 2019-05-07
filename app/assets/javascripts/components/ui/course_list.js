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
		this.addUserCourse = this.addUserCourse.bind(this);
		this.deleteCourseShare = this.deleteCourseShare.bind(this);
		this.deleteUserCourse = this.deleteUserCourse.bind(this);
	}
	componentDidMount() {
		let clientHeight = document.getElementsByClassName('course-listings')[0].clientHeight;
		
		window.addEventListener('scroll', function() {
			if (window.scrollY >= (clientHeight-400))
				document.getElementsByClassName('next_page')[0].click();
		});
	}
	deleteCourseShare(id) {
		let courseCredentials = {
			course: {
				id: parseInt(sanitization(id.toString()))
			}
		};

		$.ajax({
			type: "DELETE",
			url: "/courses_delete",
			data: courseCredentials,
			success: function(data, textStatus, jqXHR) {
				console.log("Course remove; submission successful.");
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log("Course remove; submission unsuccessful.");
			}
		});
	}
	addUserCourse(id) {
		if (!this.props.userView) {
			let courseCredentials = {
				course: {
					id: parseInt(sanitization(id.toString()))
				}
			};

			$.ajax({
				type: "POST",
				url: "/courses",
				data: courseCredentials,
				success: function(data, textStatus, jqXHR) {
					console.log("Course add; submission successful.");
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log("Course add; submission unsuccessful.");
				}
			});

			this.props.incrementCourseCount(this.props.coursesUserCount);
			this.props.incrementCourse(id);
		} else {
			this.deleteCourseShare(id);
			this.props.decrementCourseCount(this.props.coursesUserCount);
			this.props.decrementCourse(id);			
		}
	}
	deleteUserCourse(id) {
		this.deleteCourseShare(id);
		this.props.decrementCourseCount(this.props.coursesUserCount);
		this.props.decrementCourse(id);
	}
	listCourses(courses, coursesUser, userView) {
		let coursesCombined = [];
		let userExists = coursesUser !== null;
		let coursesCpy = userExists && userView ? coursesUser : courses;
		let coursesIdUser = userExists ? coursesUser.map(a => a.id) : [];

		for (let index = 0; index < coursesCpy.length; index++) {
			let isUserCourse = false;

			if (coursesIdUser.includes(coursesCpy[index].id) && userExists) 
				isUserCourse = true;

			coursesCombined.push(
				<Course 
					databaseId={coursesCpy[index].id}
					courseId={coursesCpy[index].course_id}
					description={coursesCpy[index].description}
					professor={coursesCpy[index].professor}
					count={coursesCpy[index].count}
					capOff={coursesCpy[index].cap_off}
					prerequisites={coursesCpy[index].prerequisites}
			        courseType={coursesCpy[index].course_type}
			        startDate={coursesCpy[index].start_date}
			        endDate={coursesCpy[index].end_date}
			        enrolled={isUserCourse}
			        position={index}
			        key={index}
			        parentAdd={this.addUserCourse}
			        parentDelete={this.deleteUserCourse}
			    />
			);
		}

		return coursesCombined;
	}
	coursesEnrolled(coursesUser, count) {
		if (coursesUser !== null) {
			let coursesSelected;

			if (this.props.userView) {
				coursesSelected = {
					backgroundColor: "yellow"
				};
			}
			return (
				<div id="enrolled-courses" className="no-outline" style={coursesSelected} onClick={() => this.props.viewUserCourses(!this.props.userView)}>
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
		let searchIcon;
		let searchLayout;

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
						{this.listCourses(courses,coursesUser,this.props.userView)}
						{this.isPaginateDone(courses.length)}
					</div>
			</div>
		)
	}
}

export default CourseList;
