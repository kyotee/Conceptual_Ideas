import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CourseList from '../ui/course_list.js';
import * as CourseListActions from '../actions/courseList';

function mapStateToProps(state) {
  return {
    courses: state.courseList
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CourseListActions, dispatch);
}

const CourseListContainer = connect(mapStateToProps, mapDispatchToProps)(CourseList);

export default CourseListContainer;
