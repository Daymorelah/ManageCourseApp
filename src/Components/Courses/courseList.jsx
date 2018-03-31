import React from 'react';
import CourseListRow from './courseListRow.jsx';
import PropTypes from 'prop-types';

const CourseListPage = ({courses}) =>{
    return(
      <table className='table'>
        <thead>
          <tr>
            <th>&nbsp</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Length</th>
          </tr>
        </thead>
        <tbody>
          {courses.map( course => <CourseListRow key={course.id} course={course} />
          )}
        </tbody>
      </table>
    );
}

CourseListPage.propTypes = {
  courses: PropTypes.array.isRequired
}

export default CourseListPage;