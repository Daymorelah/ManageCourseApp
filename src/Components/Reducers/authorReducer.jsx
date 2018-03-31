import * as types from '../Actions/actionTypes.jsx';
import initialState from './initialState';

export default function authorReducer(state=initialState.authors, action){
  switch(action.type){
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    break;
    
    default:
      return state;
    break;
  }
}