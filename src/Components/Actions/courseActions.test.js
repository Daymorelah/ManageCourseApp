import expect from 'expect';
import * as courseActions from './courseActions.jsx';
import * as actionsTypes from './actionTypes.jsx';

describe('Course Actions', ()=>{
  describe('Create course success', ()=>{
    it('should create a create_course_success action', ()=>{
      const course = {
        id: 'Introduction to robotics'
      };
      const expectedAction = {
        type: actionsTypes.CREATE_COURSE_SUCCESS,
        savedCourse: course
      };
      const action = courseActions.createCourseSuccess(course);
      expect(action).toEqual(expectedAction);
    });
  });
});