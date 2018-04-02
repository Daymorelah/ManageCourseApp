import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoadingDots from './loadingDots.jsx';

const Header = ({loading}) =>{
  return(
    <div>
      <NavLink to='/about' activeClassName="selected" >About</NavLink>
      { " | " }
      <NavLink to='/home' activeClassName="selected" >Home</NavLink>
      { " | " }
      <NavLink to='/coursepage' activeClassName="selected" > Course Page</NavLink>
      { " | " }
      <NavLink to='/course' activeClassName="selected" > Manage Course Page</NavLink>
  { loading && <LoadingDots interval={200} dots={20} /> }
    </div>
  );
}

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
}
export default Header;