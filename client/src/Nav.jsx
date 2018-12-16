import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle"
import AddBox from "@material-ui/icons/AddBox";


class Nav extends Component {
  render(){
    return(
      <>
        <div className="nav">
          <Link to={`/explore`}><p>Explore</p></Link>
          <Link to={`/rooms`}><p>My Rooms</p></Link>
          <Link to={`/add`}><p>Add</p></Link>
        </div>
      </>

    )
  }
}

export default Nav;
