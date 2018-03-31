import { combineReducers } from 'redux';
import courses from './courseReducers.jsx';
import authors from './authorReducer.jsx';

const rootReducer = combineReducers({
  courses,
  authors,
});

export default rootReducer;