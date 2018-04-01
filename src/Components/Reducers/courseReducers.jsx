import * as types from '../Actions/actionTypes.jsx';
import initialState from './initialState';

export default function couseReducer(state=initialState.courses, action){
  switch(action.type){
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    break;
    
    case types.CREATE_COURSE_SUCCESS:
      console.log('in create course succes action.course is ==> ',action.savedCourse)
      return [
        ...state,
        Object.assign({}, action.savedCourse)
      ];
    break;
    //spread operator, filter, Object.assign n map is very useful for immutable data manipulation.
    case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(course => course.id !== action.savedCourse.id),
        Object.assign({}, action.savedCourse)
      ];
    break;

    default:
      return state;
    break;
  }
}