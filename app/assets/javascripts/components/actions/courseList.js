import C from './courseListTypes.js';

export function viewCourses(courses) {
  return {
    type: C.VIEW_COURSES,
    courses: courses
  };
}

export function appendCourses(courses) {
  return {
    type: C.APPEND_COURSES,
    courses: courses
  };
}
