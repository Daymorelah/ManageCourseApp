import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as courseActions from '../Actions/courseActions.jsx';
import CourseForm from './courseForm.jsx';

class ManageCoursePage extends Component {
  constructor(props, context){
    super(props, context);
    this.state ={
      course: Object.assign({}, this.props.course),
      errors: {}
    }
    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }
  componentWillReceiveProps(nextProps){ //This life cycle emthod get called by react if react thinks props
    if(this.props.course.id != nextProps.course.id){ //has changed with new data
      this.setState({course: Object.assign({}, nextProps.course)})
    }
  }
  updateCourseState(event){
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course})
  }
  saveCourse(event){
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course);
    this.props.history.push('/coursepage');
  }
  render(){
    return(
      <CourseForm 
        course={this.state.course} errors={this.state.errors} allAuthors={this.props.authors}
        onChange={this.updateCourseState} onSave={this.saveCourse}
      />
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

// ManageCoursePage.contextTypes = {
//   router: PropTypes.object
// } check contextTypes on react for more info. history.push does d same work so used it instead.

function getCourseById(courses, id){
  const course = courses.filter( course => course.id == id ); //note filter returns an array.
  if (course) return course[0]; // so we return the first occurance.
  return null;
}

function mapStateToProps (state, ownProps){
  const courseId = ownProps.match.params.id; //cos we used 'id' in the route i.e. '/course:id'
  let course = { id:'', watchHref:'', title:'', authorId:'', length:'', category:'' };
  //lets format the author data coming form the API so dt select form type can use it. since we created
  //selectInput before working on the author data.
  if(courseId && state.courses.length > 0){
    course = getCourseById(state.courses, courseId);
  }
  const formatedAuthorDataForSelectInputField = state.authors.map( author => {
    return {
      value: author.id,  
      text: author.firstName+ ' ' +author.lastName, 
    }
  })

  return{
    course: course,
    authors: formatedAuthorDataForSelectInputField
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);