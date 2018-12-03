import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render(){
    return(
    <>
      <div className="home-page">
      <Link to={`/explore/`}>
        <div className="enter">
          <img src="https://i.imgur.com/B2egNdE.png" alt="home"/>
        </div>
        </Link>
      </div>
    </>
    )
  }
}

export default Home;
