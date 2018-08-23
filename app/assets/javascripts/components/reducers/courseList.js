import C from '../actions/courseListTypes.js';

const initialState = {
  "allCourses": []
};

export default function courseList(state = initialState, action) {
  switch (action.type) {
  case C.VIEW_COURSES:
    return { ...state, completedBids: action.payload };
  default:
    return state;
  }
}
