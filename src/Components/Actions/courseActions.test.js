import expect from 'expect';
import * as courseActions from './courseActions.jsx';
import * as actionsTypes from './actionTypes.jsx';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

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

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions viz thunk', ()=>{
  afterEach( ()=>{
    nock.cleanAll();
  });

  it('should clean begin_ajax_call and load_course_success when loading courses',(done)=>{
    //mock an ajax call to an external API with nock
    // nock('http://example.com').get('/course')
    // .reply(200, {body:{course: ['course data in here']}})

    const expectedActions = [
      {type: actionsTypes.BEGIN_AJAX_CALL},
      {type: actionsTypes.LOAD_COURSES_SUCCESS, body:{savedCourse:[{id:'Introduction to organic chemistry', title:'Organic Chemistry'}]}}
    ];
    //Put mock store to use by clling it and sending it an initial state and actions
    const store = mockStore({course:[]}, expectedActions);
    //lets dispatch from our store.
    store.dispatch(courseActions.loadCourses()).then( ()=>{
      //lets get all list of actions from the mock store.
      const actions = store.getActions();
      expect(actions[0].type).toEqual(actionsTypes.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(actionsTypes.LOAD_COURSES_SUCCESS);
      done();
    })
  })
})