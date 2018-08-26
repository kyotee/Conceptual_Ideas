import C from '../../actions/courseListTypes.js';

const initalState = {
  courses: []
};

export default function courseList(state = initalState.courses, action) {
  switch (action.type) {
  case C.VIEW_COURSES:
    return action.courses;
  default:
    return state;
  }
}
