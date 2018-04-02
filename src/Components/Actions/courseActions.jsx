
import * as types from './actionTypes.jsx';
import courseApi from '../../api/mockCourseApi';
import { beginAjaxCall } from './ajaxStatusActions.jsx';

export function loadCoursesSuccess(courses){
  return { type: types.LOAD_COURSES_SUCCESS, courses }
}

export function loadCourses(){
  return (dispatch)=>{
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses()
      .then(course => dispatch(loadCoursesSuccess(course))
      ).catch(err => console.log('An error in func loadcourses it si ==> ', err.message));
  }
}

export function updateCourseSuccess(savedCourse){
  return {type: types.UPDATE_COURSE_SUCCESS, savedCourse}
}

export function createCourseSuccess(savedCourse){
  return {type: types.CREATE_COURSE_SUCCESS, savedCourse}
}

export function saveCourse(course){
  return (dispatch, getState) =>{ //getstate is used to access the redux store diretlty here witout avin 2 pss a parameter.
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course)
      .then(savedCourse => course.id ? dispatch(updateCourseSuccess(savedCourse)) : 
        dispatch(createCourseSuccess(savedCourse)) )
      .catch( err => {
        console.log('got an err in fun saveCourse an it is ==> ', err);
        //throw(err);
      })
  }
}