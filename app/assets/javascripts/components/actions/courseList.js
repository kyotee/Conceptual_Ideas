import C from './courseListTypes.js';

export function allCourses(courses) {
  return {
    type: C.ALL_COURSES,
    courses: courses
  };
}

export function courseType(courseType) {
  return {
    type: C.COURSE_TYPE,
    courseType: courseType
  };
}
