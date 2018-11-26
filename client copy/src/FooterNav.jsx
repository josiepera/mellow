import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import Search from "@material-ui/icons/Search";
import Home from "@material-ui/icons/Home";
import AccountCircle from "@material-ui/icons/AccountCircle"

class FooterNav extends Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };


  render(){
   const { classes } = this.props;
   const { value } = this.state;

  return(
  <nav className="FooterNav">
    <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
      >
        <BottomNavigationAction label="Explore" icon={<Search />}
        component={Link}
        to="/explore"
        />

        <BottomNavigationAction label="My Rooms" icon={<AccountCircle />}
        component={Link}
        to="/rooms"
        />

      </BottomNavigation>

  </nav>
  )
}
}

FooterNav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default FooterNav;
