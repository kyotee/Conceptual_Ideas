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

export function incrementCourseCount(count) {
  return {
    type: C.INCREMENT_COURSES_COUNT,
    coursesUserCount: count
  };
}

export function decrementCourseCount(count) {
  return {
    type: C.DECREMENT_COURSES_COUNT,
    coursesUserCount: count
  }; 
}

export function incrementCourse(course) {
  return {
    type: C.INCREMENT_COURSES,
    coursesUser: course
  };
}

export function decrementCourse(course) {
  return {
    type: C.DECREMENT_COURSES,
    coursesUser: course
  };
}

export function selectMobileOptions(mobileOption) {
  return {
    type: C.SELECT_MOBILE_OPTIONS,
    mobileOption: mobileOption
  }
}
