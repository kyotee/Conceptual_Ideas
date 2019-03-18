import C from '../../actions/courseListTypes.js';

const initalState = {
	courses: [],
	courseTypes: "",
  courseLevels: "1",
  sort: "Ascending"
};

export default function courseList(state = initalState, action) {
  switch (action.type) {
  case C.ALL_COURSES:
  	return { ...state, courses: state.courses.concat(action.courses) };
  case C.COURSE_TYPE:
  	return { ...state, courseTypes: action.courseTypes };
  case C.COURSE_LEVEL:
    return { ...state, courseLevels: action.courseLevels };
  case C.SORT_COURSES:
    return { ...state, sort: action.sort };
  default:
    return state;
  }
}
