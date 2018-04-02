import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Common/header.jsx';

class App extends Component{
  render(){
    return(
      <div className='container'>
        <Header
          loading={this.props.loading}
        />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = { 
  children: PropTypes.array,
  loading: PropTypes.bool.isRequired,
}

function mapStateToProps(state, ownProps){
  return{
    loading: state.ajaxCallInProgress > 0,
  }
}

export default connect(mapStateToProps)(App);