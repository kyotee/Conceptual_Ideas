import { combineReducers } from 'redux';
import chatter from './chatter/chatter';
import counter from './counter/counter';
import courseList from './courseList/courseList';
import imageDifferences from './imageDifferences/imageDifferences';
import navigationBar from './navigationBar/navigationBar';

const rootReducer = combineReducers({
	chatter,
	counter,
	courseList,
	imageDifferences,
	navigationBar
});

export default rootReducer;
