import React, { Component } from 'react';
import FooterNav from './FooterNav'
import axios from 'axios';
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import { Link } from 'react-router-dom';
import FurnitureList from './FurnitureList'

class RoomSingle extends Component {
  state = {
		room: null,
		apiDataLoaded: false,
    show: false
	}

  toggleInfo = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  componentDidMount() {
  console.log('this is props from RoomSingle: ', this.props)
  axios.get(`/rooms/${this.props.match.params.id}`)
    .then(res => {
      this.setState({
        apiDataLoaded:true,
        room: res.data.data
      })
    }).catch(err => console.log(err))
  }

  renderRoomOrLoading() {
   if (this.state.apiDataLoaded) {
     return (
      <>
       <div className="header">
        <Link to={`/rooms`}><div className="back">{<ArrowBackIos />}</div></Link>
   			<h1>{this.state.room.type}</h1>
   		 </div>
       <div className="inner">
        <div className="top">
          <h3>{this.state.room.title}</h3>
          <div className="room-layout">
            <img src={this.state.room.url} alt={this.state.room.type} />
          </div>
        </div>
          <div className="furn-list">
            <FurnitureList/>
          </div>
          <p>{this.state.room.description}</p>
       </div>
      </>
     )
   } else return <img className="loading" src="https://i.imgur.com/EATfJf4.gif" alt="...loading"></img>
 }

  render(){
    return(
    <div>
      {this.renderRoomOrLoading()}
      <FooterNav/>
    </div>
    )
  }
}

export default RoomSingle;
