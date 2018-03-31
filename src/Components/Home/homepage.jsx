import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Homepage extends Component{
  render(){
    return(
      <div>
        <h1>Homepage</h1>
        <Link to="about" className="btn btn-primary btn-lng"> About Page</Link>
        <p>This is meant to be the home page</p>
      </div>
    );
  }
}

export default Homepage;