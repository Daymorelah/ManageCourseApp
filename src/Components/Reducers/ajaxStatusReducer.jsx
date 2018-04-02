import * as types from '../Actions/actionTypes.jsx';
import initialState from './initialState';

function actionTypeEndInSuccess(actionType){
  return actionType.substring(actionType.length - 8 == '_SUCCESS');
}

export default function ajaxStatusReducer(state=initialState.ajaxCallInProgress, action){
  if(action.type == types.BEGIN_AJAX_CALL){
    return state + 1;
  }else if (actionTypeEndInSuccess(action.type)){
    return state - 1 ;
  }
  return state;
}