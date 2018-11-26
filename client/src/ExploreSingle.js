import React, { Component } from 'react';
import FooterNav from './FooterNav'
import axios from 'axios';
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import { Link } from 'react-router-dom';
import LocationOn from "@material-ui/icons/LocationOn";

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

  renderExploreOrLoading() {
   if (this.state.apiDataLoaded) {
     return (
       <div className="inner">
        <div className="header">
          <Link to={`/explore`}><div className="back">{<ArrowBackIos />}</div></Link>
          <h1>Post</h1>
        </div>
        <div className="prof-header">
          <img className="profile-pic" src={this.state.explore.profile_url} alt="Profile Pic" />
            <div className="prof-info">
              <p className="prof-name">{this.state.explore.name}</p>
              <p className="location">{<LocationOn />} {this.state.explore.location}</p>
            </div>
        </div>
          <div className="room-layout">
            <img src={this.state.explore.url} alt={this.state.explore.title} />
          </div>
          <div className="bottom-info">
            <h4>{this.state.explore.title}</h4>
            <p>{this.state.explore.size}</p>
            <p>{this.state.explore.description}</p>
          </div>
       </div>
     )
   } else return <img className="loading" src="https://i.imgur.com/EATfJf4.gif" alt="...loading"></img>
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
