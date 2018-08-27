import React, { Component } from 'react';
import Course from './course.js';

class CourseList extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		var clientHeight = document.getElementsByClassName('course-listings')[0].clientHeight;
		
		if (localStorage.getItem("scrollPosition") != null) {
			if (localStorage.getItem("scrollPosition") < clientHeight)
				localStorage.setItem("scrollPosition", clientHeight);
		}

		window.addEventListener('scroll', function() {
			if (window.scrollY >= (clientHeight-400)) {		
				if (localStorage.getItem("scrollPosition") == null || (!window.location.href.includes("/courses_list?"))) {
					localStorage.setItem("scrollPosition", clientHeight);
					document.getElementsByClassName('next_page')[0].click();
				} else if ((localStorage.getItem("scrollPosition")-400) < clientHeight) {
					document.getElementsByClassName('next_page')[0].click();
				}
			}
		});

		document.getElementById("hit").addEventListener('click', function() {
			var userCredentials = {
				course: {
					  search: "#b2d8d8"
					}
			};

			$.ajax({
				type: "get",
				url: "/courses_list",
				data: userCredentials,
				success: function(data, textStatus, jqXHR) {
					console.log("User creation; submission successful.");
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log("User creation; submission unsuccessful.");
				}
			});
		});
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
			        key={index} 
			    />
			);
		}

		return coursesCombined;
	}
	render() {
		const { appendCourses, courses } = this.props;
		return (
			<div className="course-listings">
				<button id="hit">lol</button>
				{this.listCourses(courses)}
			</div>
		)
	}
}

export default CourseList;
