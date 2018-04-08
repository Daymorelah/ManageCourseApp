import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actionTypes from '../Actions/courseActions.jsx';
import CourseList from './courseList.jsx';

class CoursePage extends Component{
  constructor(props, context){
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }
  redirectToAddCoursePage(){
    this.props.history.push('/course');
  }
  render(){
    const {courses} = this.props;
    return(
      <div className='container'>
        <h1>Courses</h1>
        <input
          type='button' value='Add Course' className='btn btn-primary' onClick={this.redirectToAddCoursePage}
        />
        <CourseList courses={courses} />
      </div>
    );
  }
}

CoursePage.proptypes = {
  createCourse: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
}

function mapStateToProps(state, ownPorps){
  return {
    courses: state.courses,
  }
}

function mapDispathToProps(dispatch){
  return {
    createCourse: (course) => { dispatch(actionTypes.createCourse(course));}
    //or do: actions: bindActionCreators(actionTYpes.createCourse, dispatch); import {bindACreators} from redux
    //or do: actions: bindActionCreators(actionTypes, dispatch); note its Proptype wud b object.
  }
}

export default connect(mapStateToProps, mapDispathToProps)(CoursePage);
