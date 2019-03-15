import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import CourseListContainer from './courseListContainer';
import configureStore from '../store/configureStore';
import {allCourses,courseType} from '../actions/courseList';

const store = configureStore();

class CourseListRedux extends Component {
  componentWillMount() {
    store.dispatch(allCourses(this.props.courses));
    store.dispatch(courseType(this.props.type));
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
