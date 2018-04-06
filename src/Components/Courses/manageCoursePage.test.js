import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import { ManageCoursePage } from './manageCoursePage.jsx';

describe('Manage course page ', ()=>{
  const props = {
    authors:[],
    course :{ id:'', watchHref:'', title:'', authorId:'', length:'', category:'' }
  }
  it('sets error message when trying to save empty title', ()=>{
    const wrapper = mount(<ManageCoursePage {...props} />);
    
  })
})