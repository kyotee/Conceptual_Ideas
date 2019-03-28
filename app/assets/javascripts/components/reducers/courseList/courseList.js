import C from '../../actions/courseListTypes.js';

const initalState = {
	courses: [],
	courseTypes: "",
  courseLevels: "1",
  sort: "Ascending",
  coursesUser: [],
  coursesUserCount: 0
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
  case C.USER_COURSES:
    return { ...state, coursesUser: action.coursesUser };
  case C.USER_COURSES_COUNT:
    return { ...state, coursesUserCount: action.coursesUserCount };
  case C.INCREMENT_COURSES_COUNT:
    return { ...state, coursesUserCount: action.coursesUserCount + 1 };
  case C.DECREMENT_COURSES_COUNT:
    return { ...state, coursesUserCount: action.coursesUserCount - 1 };
  default:
    return state;
  }
}
