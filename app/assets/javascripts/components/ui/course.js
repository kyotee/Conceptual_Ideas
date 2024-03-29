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
	enrollCourse(id) {
		if (!this.state.enroll)
			this.props.parentAdd(id);
		else
			this.props.parentDelete(id);

		this.setState({ enroll: !this.state.enroll });
	}
	render() {
		const { detail,enroll } = this.state;
		const { courseType,databaseId,enrolledList,enrolled,courseId,description,count,professor,capOff,startDate,endDate } = this.props;
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

		if (enrolledList.includes(databaseId) && (enroll || enrolled)) {
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
						<p className="tab-text"><b>{courseId}</b>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<i>A Boring Course</i></p>
						<p className="tab-status no-outline" style={tabStatus} id={databaseId} onClick={() => this.enrollCourse(databaseId)}>Enroll</p>
						<div className="tab-icon-status" style={tabStatusIcon} id={databaseId} onClick={() => this.enrollCourse(databaseId)}>
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

Course.propTypes = {
  databaseId: PropTypes.number.isRequired,
  courseId: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  professor: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  capOff: PropTypes.string.isRequired,
  prerequisites: PropTypes.string.isRequired,
  courseType: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  enrolled: PropTypes.bool.isRequired,
  position: PropTypes.number.isRequired,
  parentAdd: PropTypes.func.isRequired,
  parentDelete: PropTypes.func.isRequired,
  enrolledList: PropTypes.array.isRequired
};

export default Course;
