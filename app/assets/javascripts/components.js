import React from 'react';
import ReactDOM from 'react-dom';

// Redux Components
import ChatterRedux from './components/containers/chatterRedux.js';
import CounterRedux from './components/containers/counterRedux.js';
import CourseListRedux from './components/containers/courseListRedux.js';
import NavigationBarRedux from './components/containers/navigationBarRedux.js';
import SandwichNavigationRedux from './components/containers/sandwichNavigationRedux.js';
import SideNavigationBarRedux from './components/containers/sideNavigationBarRedux.js';

// UI Components
import Chatter from './components/ui/chatter.js';
import Counter from './components/ui/counter.js';
import CourseList from './components/ui/course_list.js';
import NavigationBar from './components/ui/navigation_bar.js';
import SandwichNavigation from './components/ui/sandwich_navigation.js';
import SideNavigationBar from './components/ui/side_navigation_bar.js';

import UserApplications from './components/ui/user_applications.js';
import ImageDifferences from './components/ui/image_differences.js';
import SignupSigninForm from './components/ui/signup_signin_form.js';
import StatusMessages from './components/ui/status_messages.js';
import MonitoringUsers from './components/ui/monitoring_users.js';

global.React = React
global.ReactDOM = ReactDOM

global.ChatterRedux = ChatterRedux
global.Chatter = Chatter
global.CounterRedux = CounterRedux
global.Counter = Counter
global.CourseListRedux = CourseListRedux
global.CourseList = CourseList
global.NavigationBarRedux = NavigationBarRedux
global.NavigationBar = NavigationBar
global.SandwichNavigationRedux = SandwichNavigationRedux
global.SandwichNavigation = SandwichNavigation
global.SideNavigationBarRedux = SideNavigationBarRedux
global.SideNavigationBar = SideNavigationBar

global.UserApplications = UserApplications
global.ImageDifferences = ImageDifferences
global.SignupSigninForm = SignupSigninForm
global.StatusMessages = StatusMessages
global.MonitoringUsers = MonitoringUsers
