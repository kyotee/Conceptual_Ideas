import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import CourseListContainer from './courseListContainer';
import configureStore from '../store/configureStore';
import {allCourses,categoryCourses} from '../actions/courseList';

const store = configureStore();

class CourseListRedux extends Component {
  componentWillMount() {
    if (this.props.type === "All")
      store.dispatch(allCourses(this.props.courses));
    else
      store.dispatch(categoryCourses(this.props.courses));
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
