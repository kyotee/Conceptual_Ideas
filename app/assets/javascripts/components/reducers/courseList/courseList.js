import C from '../../actions/courseListTypes.js';

const initalState = {
	courses: [],
	courseTypes: ""
};

export default function courseList(state = initalState, action) {
  switch (action.type) {
  case C.ALL_COURSES:
  	return { ...state, courses: state.courses.concat(action.courses) };
  case C.COURSE_TYPE:
  	  	return { ...state, courseTypes: action.courseTypes };
  default:
    return state;
  }
}
