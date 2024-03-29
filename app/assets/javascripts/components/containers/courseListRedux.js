import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import CourseListContainer from './courseListContainer';
import configureStore from '../store/configureStore';
import {allCourses,courseType,courseLevel,sortCourses,userCourses,userCoursesCount} from '../actions/courseList';

const store = configureStore();

class CourseListRedux extends Component {
  componentWillMount() {
    store.dispatch(sortCourses(this.props.sort));
    store.dispatch(allCourses(this.props.courses));
    store.dispatch(courseType(this.props.type));
    store.dispatch(courseLevel(this.props.level));
    store.dispatch(userCourses(this.props.userCourses));
    store.dispatch(userCoursesCount(this.props.userCoursesCount));
  }
  render() {
    return (
      <Provider store={store}>
        <CourseListContainer />
      </Provider>
    );
  }
}

export default CourseListRedux;
