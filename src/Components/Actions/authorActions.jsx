
import * as types from './actionTypes.jsx';
import authorApi from '../../api/mockAuthorApi';
import { beginAjaxCall } from './ajaxStatusActions.jsx';

export function loadAuthorsSuccess(authors){
  return { type: types.LOAD_AUTHORS_SUCCESS, authors }
}

export function loadAuthors(){
  return (dispatch)=>{
    dispatch(beginAjaxCall());
    return authorApi.getAllAuthors()
      .then(authors => dispatch(loadAuthorsSuccess(authors))
      ).catch(err => console.log('An error in func loadAuthors it is ==> ', err.message));
  }
}