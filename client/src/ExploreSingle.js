import React, { Component } from 'react';
import FooterNav from './FooterNav'
import axios from 'axios';
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import { Link } from 'react-router-dom';
import LocationOn from "@material-ui/icons/LocationOn";
import FurnitureList from "./FurnitureList";
import Nav from "./Nav";
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

class ExploreSingle extends Component {
  state = {
		room: null,
		apiDataLoaded: false
	}

  componentDidMount() {
  console.log('this is props from ExploreSingle: ', this.props)
  axios.get(`/explore/${this.props.match.params.id}`)
    .then(res => {
      this.setState({
        apiDataLoaded:true,
        explore: res.data.data
      })
    }).catch(err => console.log(err))
  }

// <Link to={`/explore`}><div className="back">{<ArrowBackIos />}</div></Link>
  renderExploreOrLoading() {
   if (this.state.apiDataLoaded) {
     return (
       <div className="inner">
        <div className="header">
          <h1>Post</h1>
          <Nav/>
        </div>
      <div className="explore-single">
        <div className="prof-header">

          <Grid>
            <Avatar alt="Remy Sharp" src={this.state.explore.profile_url}/>
          </Grid>
            <div className="prof-info">
              <p className="prof-name">{this.state.explore.name}</p>
              <p className="location">{<LocationOn />} {this.state.explore.location}</p>
            </div>
        </div>

          <div className="room-layout">
            <img src={this.state.explore.url} alt={this.state.explore.title} />
          </div>
          <div className="bottom-info">
            <div className="bottom-header">
              <h4>{this.state.explore.title}</h4>
              <p>{this.state.explore.size} Sq.Ft.</p>
            </div>
            <p>{this.state.explore.description}</p>
          </div>

          <h3>Buy this Look</h3>
           <FurnitureList/>
        </div>
       </div>
     )
   } else return <img className="loading" src="http://www.tbaf.org.tw/event/2016safe/imgs/loader1.gif" alt="...loading"></img>
  }
  render(){
    return(
    <div>
      {this.renderExploreOrLoading()}
      <FooterNav/>
    </div>
    )
  }
}

export default ExploreSingle;
