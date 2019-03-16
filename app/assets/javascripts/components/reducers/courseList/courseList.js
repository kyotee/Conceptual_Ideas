import C from '../../actions/courseListTypes.js';

const initalState = {
	courses: [],
	courseTypes: "",
  sort: "Ascending"
};

export default function courseList(state = initalState, action) {
  switch (action.type) {
  case C.ALL_COURSES:
  	return { ...state, courses: state.courses.concat(action.courses) };
  case C.COURSE_TYPE:
  	return { ...state, courseTypes: action.courseTypes };
  case C.SORT_COURSES:
    return { ...state, sort: action.sort };
  default:
    return state;
  }
}
