import React, { Component } from 'react';

class CourseList extends Component {
	render() {
		return (
			<div>
				<p>{this.props.courses[0].course_id}</p>
			</div>
		)
	}
}

export default CourseList;
