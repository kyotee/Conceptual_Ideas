import { combineReducers } from 'redux';
import counter from './counter/counter';
import courseList from './courseList/courseList';
import navigationBar from './navigationBar/navigationBar';

const rootReducer = combineReducers({
	counter,
	courseList,
	navigationBar
});

export default rootReducer;
