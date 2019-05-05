import React, { Component } from 'react';
import colors from '../json_data/course_colors.js';

class Course extends Component {
	constructor(props) {
		super(props);

		this.state = {	
			detail: false,
			enroll: this.props.enrolled ? true : false
		};

		this.showDetails = this.showDetails.bind(this);
		this.enrollCourse = this.enrollCourse.bind(this);
	}
	showDetails() {
		this.setState({ detail: !this.state.detail });
	}
	enrollCourse() {
		this.setState({ enroll: !this.state.enroll });
	}
	render() {
		const { detail,enroll } = this.state;
		const { courseType,enrolled,courseId,description,count,professor,capOff,startDate,endDate } = this.props;
		let courseColor = {
			backgroundColor: colors[courseType]
		};
		let detailShow;
		let detailIcon;
		let tabStatus;
		let tabStatusIcon;

		if (detail) {
			detailShow = {
				display: "block"
			};

			detailIcon = {
				WebkitTransform: "rotate(0deg)",
    			transform: "rotate(0deg)"
			};
		}

		if (enroll || enrolled) {
			tabStatus = {
				display: "none"
			};

			tabStatusIcon = {
				display: "block",
				backgroundImage: "url('/assets/check.gif?v=" + new Date().valueOf() + "')"
			};
		}
		return (
			<div className="course">
				<div className="tab" style={courseColor}>
					<div className="tab-container">
						<p className="tab-text">{courseId}&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<i>A Boring Course</i></p>
						<p className="tab-status no-outline" id={courseId} style={tabStatus} onClick={this.enrollCourse}>Enroll</p>
						<div className="tab-icon-status" id={courseId+"-Unenrolled"} style={tabStatusIcon} onClick={this.enrollCourse}>
						</div>
					</div>
				</div>
				<div>
					<p className="course-desc">{description}</p><br/>
				</div>
				<div className="more-info" style={detailShow}>
					<p><div className="desc-color">Professor</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{professor}</p>
					<p><div className="desc-color">Enrollment</div>&nbsp;&nbsp;&nbsp;{count} / {capOff}</p>
					<p><div className="desc-color">Duration</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{startDate} to {endDate}</p>
				</div>                                  
				<div>
					<p className="click-me" style={detailIcon} onClick={this.showDetails}>↑</p>
				</div>
			</div>
		)
	}
}

export default Course;
