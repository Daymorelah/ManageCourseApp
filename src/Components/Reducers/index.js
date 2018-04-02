import { combineReducers } from 'redux';
import courses from './courseReducers.jsx';
import authors from './authorReducer.jsx';
import ajaxCallInProgress from './ajaxStatusReducer.jsx';

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallInProgress,
});

export default rootReducer;