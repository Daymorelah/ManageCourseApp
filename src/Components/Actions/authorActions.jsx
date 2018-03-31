
import * as types from './actionTypes.jsx';
import authorApi from '../../api/mockAuthorApi';

export function loadAuthorsSuccess(authors){
  return { type: types.LOAD_AUTHORS_SUCCESS, authors }
}

export function loadAuthors(){
  return (dispatch)=>{
    return authorApi.getAllAuthors()
      .then(authors => dispatch(loadAuthorsSuccess(authors))
      ).catch(err => console.log('An error in func loadAuthors it is ==> ', err.message));
  }
}