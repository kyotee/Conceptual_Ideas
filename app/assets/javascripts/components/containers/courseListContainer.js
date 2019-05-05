import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CourseList from '../ui/course_list.js';
import * as CourseListActions from '../actions/courseList';

function mapStateToProps(state) {
  return {
    courses: state.courseList.courses,
    courseTypes: state.courseList.courseTypes,
    courseLevels: state.courseList.courseLevels,
    sort: state.courseList.sort,
    coursesUser: state.courseList.coursesUser,
    coursesUserCount: state.courseList.coursesUserCount,
    mobileOption: state.courseList.mobileOption,
    userView: state.courseList.userView
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CourseListActions, dispatch);
}

const CourseListContainer = connect(mapStateToProps, mapDispatchToProps)(CourseList);

export default CourseListContainer;
