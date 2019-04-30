import { combineReducers } from 'redux';
import chatter from './chatter/chatter';
import counter from './counter/counter';
import courseList from './courseList/courseList';
import navigationBar from './navigationBar/navigationBar';

const rootReducer = combineReducers({
	chatter,
	counter,
	courseList,
	navigationBar
});

export default rootReducer;
