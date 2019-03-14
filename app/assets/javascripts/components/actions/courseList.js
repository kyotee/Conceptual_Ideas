import C from './courseListTypes.js';

export function categoryCourses(courses) {
  return {
    type: C.CATEGORY_COURSES,
    courses: courses
  };
}

export function allCourses(courses) {
  return {
    type: C.ALL_COURSES,
    courses: courses
  };
}
