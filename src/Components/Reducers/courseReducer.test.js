import expect from 'expect';
import courseReducer from './courseReducers.jsx';
import * as actions from '../Actions/courseActions.jsx';

describe('Course Reducer', ()=>{
  it('should add course when passed create_course_success', ()=>{
    const initialState = [
      {title: 'A'}, {title:'B'}
    ];
    const newCourse = {title:'C'}
    const action = actions.createCourseSuccess(newCourse);
    const newState = courseReducer(initialState, action);
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('B');
    expect(newState[2].title).toEqual('C');
  })
  it('should update course when passed update_course_success', ()=>{
    const initialState = [
      {id: 'A', title: 'A'}, {id: 'B', title: 'B'}, {id: 'C', title: 'C'}
    ];
    const course = {id:'B', title:'New title'};
    const action = actions.updateCourseSuccess(course);
    const newState = courseReducer(initialState, action);
    const updatedCourse = newState.find(a => a.id == course.id);
    const untouchedCourse = newState.find(a => a.id == 'A');
    expect(updatedCourse.title).toEqual('New title');
    expect(untouchedCourse.title).toEqual('A');
    expect(newState.length).toEqual(3);
  })
})