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
  }
  updateCourseState(){
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course})
  }
  render(){
    return(
      <CourseForm 
        course={this.state.course} errors={this.state.errors} allAuthors={this.props.authors}
        onChange={this.updateCourseState}
      />
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
}

function mapStateToProps (state, ownProps){
  let course = { id:'', watchHref:'', title:'', authorId:'', length:'', category:'' };
  //lets format the author data coming form the API so dt select form type can use it. since we created
  //selectInput before working on the author data.
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