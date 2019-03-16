import React, { Component } from 'react';
import Course from './course.js';
import Loadinggif from './_loading_gif.js';

class CourseList extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		var clientHeight = document.getElementsByClassName('course-listings')[0].clientHeight;
		var catChange = document.getElementById('cat-selector');
		var sortChange = document.getElementById('sort-selector');

		catChange.value = this.props.courseTypes;
		sortChange.value = this.props.sort;

		window.addEventListener('scroll', function() {
			if (window.scrollY >= (clientHeight-400))
				document.getElementsByClassName('next_page')[0].click();
		});

		catChange.addEventListener('change', function() {
			window.location = `/courses_list/${catChange.value}`;
		});

		sortChange.addEventListener('change', function() {
			this.props.sortCourses(sortChange.value);
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
		const { courses,courseTypes,sort,sortCourses } = this.props;
		// if (sort === "Ascending")
		// 	courses.sort(function(a,b) {return (a.course_id > b.course_id) ? 1 : ((b.course_id > a.course_id) ? -1 : 0);} );
		// else
		// 	courses.sort(function(a,b) {return (a.course_id < b.course_id) ? 1 : ((b.course_id < a.course_id) ? -1 : 0);} );		
		return (
			<div className="course-listings">
				<div id="filter-position">
					<select id="cat-selector">  
						<option value="All">All</option>
						<option value="Comp">Comp</option>
						<option value="Engl">Engl</option>
						<option value="Fine">Fine</option>
						<option value="Geog">Geog</option>
						<option value="Hist">Hist</option>
						<option value="Math">Math</option>
						<option value="Psyc">Psyc</option>
						<option value="Soci">Soci</option>
					</select>
					<select id="sort-selector">
						<option value="Ascending">Low to High</option>
						<option value="Descending">High to Low</option>
					</select>
				</div>
				{this.listCourses(courses)}
				{this.isPaginateDone(courses.length)}
			</div>
		)
	}
}

export default CourseList;
