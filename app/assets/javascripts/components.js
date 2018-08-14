import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/containers/Root.js';
import Counter from './components/ui/Counter.js';
import UserApplications from './components/ui/user_applications.js';
import ImageDifferences from './components/ui/image_differences.js';
import NavigationBar from './components/ui/navigation_bar.js';
import SignupSigninForm from './components/ui/signup_signin_form.js';

global.React = React
global.ReactDOM = ReactDOM

global.Root = Root
global.Counter = Counter
global.UserApplications = UserApplications
global.ImageDifferences = ImageDifferences
global.NavigationBar = NavigationBar
global.SignupSigninForm = SignupSigninForm
