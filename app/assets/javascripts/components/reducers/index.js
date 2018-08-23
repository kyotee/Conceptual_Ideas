import { combineReducers } from 'redux';
import counter from './counter/counter';
import courseList from './courseList';

const rootReducer = combineReducers({
	counter,
	courseList
});

export default rootReducer;
