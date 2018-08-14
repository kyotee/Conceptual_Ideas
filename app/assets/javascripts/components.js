import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/containers/Root.js';
import Counter from './components/ui/Counter.js';
import UserApplications from './components/ui/user_applications.js';

global.React = React
global.ReactDOM = ReactDOM

global.Root = Root
global.Counter = Counter
global.UserApplications = UserApplications
