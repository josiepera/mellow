import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Tutorial extends Component {
  render(){
    return(
    <>
      <div className="tutorial">
        <div className="enter">
          <h2>Tutorial</h2>
          <p> This is the tutorial, figure it out</p>
          <Link to={`/explore/`}><button>Skip</button></Link>
        </div>
      </div>
    </>
    )
  }
}

export default Tutorial;
