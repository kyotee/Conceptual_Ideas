import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import CourseListContainer from './courseListContainer';
import configureStore from '../store/configureStore';
import {viewCourses} from '../actions/courseList';

const store = configureStore();

class CourseListRedux extends Component {
  componentWillMount() {
    store.dispatch(viewCourses(this.props.courses));
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
