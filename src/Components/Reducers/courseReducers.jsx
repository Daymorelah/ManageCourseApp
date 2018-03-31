import * as types from '../Actions/actionTypes.jsx';
import initialState from './initialState';

export default function couseReducer(state=initialState.courses, action){
  switch(action.type){
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    break;
    
    default:
      return state;
    break;
  }
}