import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () =>{
  return(
    <div>
      <NavLink to='/about' activeClassName="selected" >About</NavLink>
      { " | " }
      <NavLink to='/home' activeClassName="selected" >Home</NavLink>
      { " | " }
      <NavLink to='/coursepage' activeClassName="selected" > Course Page</NavLink>
      { " | " }
      <NavLink to='/course' activeClassName="selected" > Manage Course Page</NavLink>
    </div>
  );
}

export default Header;