import C from './courseListTypes.js';

export function allCourses(courses) {
  return {
    type: C.ALL_COURSES,
    courses: courses
  };
}

export function courseType(courseTypes) {
  return {
    type: C.COURSE_TYPE,
    courseTypes: courseTypes
  };
}

export function courseLevel(courseLevels) {
  return {
    type: C.COURSE_LEVEL,
    courseLevels: courseLevels
  };
}

export function sortCourses(sort) {
  return {
    type: C.SORT_COURSES,
    sort: sort
  };
}

export function userCourses(courses) {
  return {
    type: C.USER_COURSES,
    coursesUser: courses
  };
}

export function userCoursesCount(count) {
  return {
    type: C.USER_COURSES_COUNT,
    coursesUserCount: count
  };
}
