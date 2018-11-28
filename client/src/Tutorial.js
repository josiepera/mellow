import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Tutorial extends Component {
  render(){
    return(
    <>
      <div className="tutorial">
        <div className="enter-tutorial">
          <div className="tutorial-images">
            <img src="https://i.imgur.com/kzGCnI7.png" alt="tutorial"/>
            <img src="https://i.imgur.com/A97j8rk.png" alt="tutorial"/>
            <img className="save" src="https://i.imgur.com/yAGXBps.png" alt="faves" />
            <img className="create" src="https://i.imgur.com/1PhbVqg.png" alt="create"/>
          </div>
          <Link to={`/explore/`}><button>Explore Inspiration</button></Link>
        </div>
      </div>
    </>
    )
  }
}

export default Tutorial;
