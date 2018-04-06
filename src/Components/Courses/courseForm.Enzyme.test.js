import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import shallowRenderer from 'react-test-renderer/shallow';
import CourseForm from './courseForm.jsx';

//the func below mimiks what would be returned by the courseForm component
function setUp(saving){
  const props = {
    course: {}, saving: saving, errors:{},
    onSave: () =>{},
    onChange: () =>{}
  }
  return shallow( <CourseForm {...props} /> );
}

describe('CourseForm via Enzyme', ()=>{
  it('renders form and h1', ()=>{
    const wrapper = setUp();
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Manage Course');
  });

  it('save button is labeled save when not saving', ()=>{
    const wrapper = setUp(false);
    expect(wrapper.find('input').props().value).toBe('Save');
  });

  it('save button is labeled Saving... when saving', ()=>{
    const wrapper = setUp(true);
    expect(wrapper.find('input').props().value).toBe('Saving...');
  });
});