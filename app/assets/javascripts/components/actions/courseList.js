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

export function incrementCourse(id) {
  return {
    type: C.INCREMENT_COURSES,
    id: id
  };
}

export function decrementCourse(id) {
  return {
    type: C.DECREMENT_COURSES,
    id: id
  };
}

export function selectMobileOptions(mobileOption) {
  return {
    type: C.SELECT_MOBILE_OPTIONS,
    mobileOption: mobileOption
  }
}

export function viewUserCourses(userView) {
  return {
    type: C.VIEW_USER_COURSES,
    userView: userView
  }
}
