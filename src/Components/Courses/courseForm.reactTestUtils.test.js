import expect from 'expect';
import React from 'react';
import shallowRenderer from 'react-test-renderer/shallow';
import CourseForm from './courseForm.jsx';

//the func below mimiks what would be returned by the courseForm component
function setUp(saving){
  let props = {
    course: {}, saving: saving, errors:{},
    onSave: () =>{},
    onChange: () =>{}
  }
  const renderer = new shallowRenderer();
  renderer.render( <CourseForm {...props} />);
  let output = renderer.getRenderOutput();
  return {
    props,
    output,
    renderer
  } 
}

describe('CourseForm via react test utils', () =>{
  it('renders form and h1', () =>{
    const { output } = setUp();
    expect(output.type).toBe('form');
    let [h1] = output.props.children;
    expect(h1.type).toBe('h1');
  })
  it('save button has a value of save when not saving', ()=>{
    const { output } = setUp(false);
    let submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe('Save');
  })
  it('save button has a value of saving... when saving', ()=>{
    const { output } = setUp(true);
    let submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe('Saving...');
  })
})