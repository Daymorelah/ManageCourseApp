import React, { Component } from 'react';
import { Route, Switch, Link} from 'react-router-dom';
import HomePage from './Components/Home/homepage.jsx';
import AboutPage from './Components/About/about.jsx';
import CoursePage from './Components/Courses/coursePage.jsx';
import ManageCoursePage from './Components/Courses/manageCoursePage.jsx';
import App from './Components/App.jsx';

const Routes = ()=>(
  <Switch>
    <App path="/" component={App}>
      <Route path="/about" component={AboutPage} />
      <Route path="/home" component={HomePage} />
      <Route path='/coursepage' component={CoursePage} />
      <Route exact path='/course' component={ManageCoursePage} />
      <Route path='/course/:id' component={ManageCoursePage} />
    </App>
  </Switch>
); 

export default Routes;