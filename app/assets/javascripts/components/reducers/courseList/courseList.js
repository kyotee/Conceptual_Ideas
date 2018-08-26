import C from '../../actions/courseListTypes.js';

const initalState = {
  courses: []
};

export default function courseList(state = initalState.courses, action) {
  switch (action.type) {
  case C.APPEND_COURSES:
    return state;
  case C.VIEW_COURSES:
  	state = state.concat(action.courses);
    return state;
  default:
    return state;
  }
}
