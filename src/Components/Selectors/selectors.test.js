import expect from 'expect';
import { formatedAuthorDataForSelectInputField } from './selectors';

describe('Author selectors', ()=>{
  describe('Formated author data for select input field', ()=>{
    it('should return a formated author list to be used in drop down', ()=>{
      const authors = [
        {id: 'Demola Hussain', firstName:'Demola', lastName: 'Hussain'}
      ];
      const expected = [
        {value: 'Demola Hussain', text: 'Demola Hussain'}
      ];
      expect(formatedAuthorDataForSelectInputField(authors)).toEqual(expected);
    })
  })
})