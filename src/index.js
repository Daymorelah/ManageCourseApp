import React from 'react';
import { render} from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes.jsx';
import store from './Store/configureStore.jsx';
import { loadCourses } from './Components/Actions/courseActions.jsx';
import { loadAuthors } from './Components/Actions/authorActions.jsx';
import './style/mystyle.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

//We wan to load courses n authors i.e dispatch an action (loadCourses) on page load in the browseer.
store.dispatch(loadCourses()); //ensure store is being called so as to be setup b4 call store.dispatch.
store.dispatch(loadAuthors());

render(
  <Provider store={store}>
    <Router>
      <Routes/>
    </Router>
  </Provider>,
  document.getElementById('app')
);