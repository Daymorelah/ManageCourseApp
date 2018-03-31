import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutPage extends Component{
  render() {
    return(
      <div>
        <h1>About Page</h1>
        <div>This is meant to be the about page. <br/> 
        <Link to="home" className="btn btn-primary btn-lng"> Home Page</Link>
        </div>
      </div>
    );
  }
}

export default AboutPage;