import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Rootreducers from '../Components/Reducers/index';

const  configureStore = (initialState) => createStore(
    Rootreducers, initialState, compose(
      applyMiddleware(thunk),
      window.REDUX_DEVTOOLS_EXTENSION__ ? window.REDUX_DEVTOOLS_EXTENSION__() : functional => functional
    ) //end of compose
  ); //end of create Store.

const store = configureStore();

export default store;