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
  case C.INCREMENT_COURSES:
    for (let index = 0; index < state.courses.length; index++) {
      if (state.courses[index].course_id == action.coursesUser) {
        // state.coursesUser.push(state.courses[index]);

        // let obj = JSON.parse(state.coursesUser);
        // obj.push(state.courses[index]);
        // state.coursesUser = JSON.stringify(obj);

        // state.coursesUser = state.courses[index];
        // alert(state.coursesUser.length);
      }
    }
    // return { ...state, coursesUser: state.coursesUser.push(action.coursesUser) }; 
  case C.DECREMENT_COURSES:
    for (let index = 0; index < state.coursesUser.length; index++) {
      if (state.coursesUser[index].course_id == action.coursesUser)
        state.coursesUser.splice(index,1)
    }
  default:
    return state;
  }
}
