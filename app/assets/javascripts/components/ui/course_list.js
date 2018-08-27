import React, { Component } from 'react';
import Course from './course.js';
import Loadinggif from './_loading_gif.js';

class CourseList extends Component {
	constructor(props) {
		super(props);

		// commented code is for reference of using component state and managing state when it's updated
		// this.state = {
		// 	scrollInfo: 0
		// };
	}
	componentDidMount() {
		var currCourseNum = this.props.courses.length;

		if (currCourseNum != 15)
			document.getElementById("course-"+this.props.courses[(currCourseNum-18)].id.toString()).scrollIntoView();

		var clientHeight = document.getElementsByClassName('course-listings')[0].clientHeight;

		if (localStorage.getItem("scrollPosition") != null) {
			if (localStorage.getItem("scrollPosition") < clientHeight)
				localStorage.setItem("scrollPosition", clientHeight);
		}

		window.addEventListener('scroll', function() {
			if (window.scrollY >= (clientHeight-700)) {		
				if (localStorage.getItem("scrollPosition") == null || (!window.location.href.includes("/courses_list?"))) {
					localStorage.setItem("scrollPosition", clientHeight);

					// this.setState({
				 //      scrollInfo: window.scrollY
				 //    });

					document.getElementsByClassName('next_page')[0].click();
				} else if ((localStorage.getItem("scrollPosition")-700) < clientHeight) {
					// this.setState({
				 //      scrollInfo: window.scrollY
				 //    });

					document.getElementsByClassName('next_page')[0].click();
				}
			}
		}.bind(this));

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
	// componentDidUpdate(prevProps, prevState) {
	//   if (this.state.scrollInfo > prevState.scrollInfo)
	//     window.scrollTo(0, this.state.scrollInfo);  
	// }
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
				<Loadinggif/>
			)
		}
	}
	render() {
		const { appendCourses, courses } = this.props;
		return (
			<div className="course-listings">
				<button id="hit">lol</button>
				{this.listCourses(courses)}
				{this.isPaginateDone(courses.length)}
			</div>
		)
	}
}

export default CourseList;
