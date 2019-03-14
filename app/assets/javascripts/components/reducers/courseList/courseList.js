import C from '../../actions/courseListTypes.js';

const initalState = {
  courses: []
};

export default function courseList(state = initalState, action) {
  switch (action.type) {
  case C.APPEND_COURSES:
    state = action.courses;
    return state;
  case C.VIEW_COURSES:
  	return { ...state, courses: state.courses.concat(action.courses) };
  default:
    return state;
  }
}
