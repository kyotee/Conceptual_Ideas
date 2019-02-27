import React from 'react';
import ReactDOM from 'react-dom';

// Redux Components
import CounterRedux from './components/containers/counterRedux.js';
import CourseListRedux from './components/containers/courseListRedux.js';

// UI Components
import Counter from './components/ui/counter.js';
import CourseList from './components/ui/course_list.js';

import UserApplications from './components/ui/user_applications.js';
import ImageDifferences from './components/ui/image_differences.js';
import NavigationBar from './components/ui/navigation_bar.js';
import SignupSigninForm from './components/ui/signup_signin_form.js';
import StatusMessages from './components/ui/status_messages.js';
import MonitoringUsers from './components/ui/monitoring_users.js';

global.React = React
global.ReactDOM = ReactDOM

global.CounterRedux = CounterRedux
global.Counter = Counter
global.CourseListRedux = CourseListRedux
global.CourseList = CourseList

global.UserApplications = UserApplications
global.ImageDifferences = ImageDifferences
global.NavigationBar = NavigationBar
global.SignupSigninForm = SignupSigninForm
global.StatusMessages = StatusMessages
global.MonitoringUsers = MonitoringUsers
