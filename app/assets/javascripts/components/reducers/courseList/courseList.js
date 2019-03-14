import C from '../../actions/courseListTypes.js';

const initalState = {
  courses: []
};

export default function courseList(state = initalState, action) {
  switch (action.type) {
  case C.CATEGORY_COURSES:
    return { ...state, courses: state.courses.concat(action.courses) };
  case C.ALL_COURSES:
  	return { ...state, courses: state.courses.concat(action.courses) };
  default:
    return state;
  }
}
