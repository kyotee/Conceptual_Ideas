import C from '../../actions/courseListTypes.js';

const initalState = {
	courses: [],
	courseTypes: "",
  courseLevels: "1",
  sort: "Ascending",
  coursesUser: [],
  coursesUserCount: 0,
  mobileOption: false,
  userView: false
};

export default function courseList(state = initalState, action) {
  switch (action.type) {
  case C.ALL_COURSES:
  	return { ...state, courses: action.courses };
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
  case C.INCREMENT_COURSES:
    if (state.coursesUser !== null) {
      for (let index = 0; index < state.courses.length; index++) {
        if (state.courses[index].id == action.id) {
          return { ...state, coursesUser: state.coursesUser.concat(state.courses[index])}; 
        }
      }
    }
  case C.DECREMENT_COURSES:
    if (state.coursesUser !== null) {
      return { ...state, coursesUser: state.coursesUser.filter(function(x){return x.id != action.id; })};      
    }
  case C.SELECT_MOBILE_OPTIONS:
    return { ...state, mobileOption: action.mobileOption }
  case C.VIEW_USER_COURSES:
    return { ...state, userView: action.userView }
  default:
    return state;
  }
}
