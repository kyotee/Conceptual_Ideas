import React from 'react';
import ReactDOM from 'react-dom';

import CounterRedux from './components/containers/CounterRedux.js';
import Counter from './components/ui/Counter.js';
import UserApplications from './components/ui/user_applications.js';
import ImageDifferences from './components/ui/image_differences.js';
import NavigationBar from './components/ui/navigation_bar.js';
import SignupSigninForm from './components/ui/signup_signin_form.jsx';
import StatusMessages from './components/ui/status_messages.js';
import CourseList from './components/ui/course_list.js';

global.React = React
global.ReactDOM = ReactDOM

global.CounterRedux = CounterRedux
global.Counter = Counter
global.UserApplications = UserApplications
global.ImageDifferences = ImageDifferences
global.NavigationBar = NavigationBar
global.SignupSigninForm = SignupSigninForm
global.StatusMessages = StatusMessages
global.CourseList = CourseList
