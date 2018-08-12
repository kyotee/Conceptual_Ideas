import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/container/Root.js';

global.React = React
global.ReactDOM = ReactDOM
global.Root = Root

import Counter from './components/ui/Counter';

ReactDOM.render(
	<Counter />,
	document.getElementById('test-123')
);
