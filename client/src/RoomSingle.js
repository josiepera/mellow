import React, { Component } from 'react';
import FooterNav from './FooterNav'
import axios from 'axios';
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import { Link } from 'react-router-dom';
// import FurnitureList from './FurnitureList';
import Draggable from 'react-draggable';
import Rug from './Furniture/Rug';
import Television from './Furniture/Television';
import Dresser from './Furniture/Dresser';
import Table from './Furniture/Table';
import Bed from './Furniture/Bed';
import Couch from './Furniture/Couch';
import Rotatable from 'react-rotatable';
import 'react-rotatable/dist/css/rotatable.min.css';
import ScrollLock from 'react-scroll-lock-component';
import Nav from './Nav';

class RoomSingle extends Component {

  state = {
		room: null,
		apiDataLoaded: false,
    show: true,
    deltaPosition: {
      x: 0, y: 0
    },
    controlledPosition: {
      x: -400, y: 200
    }
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

  handleDrag(e, ui) {
      const {x, y} = this.state.deltaPosition;
      this.setState({
        deltaPosition: {
          x: x + ui.deltaX,
          y: y + ui.deltaY,
        }
      });
    }

  adjustXPos(e) {
    e.preventDefault();
    e.stopPropagation();
    const {x, y} = this.state.controlledPosition;
    this.setState({controlledPosition: {x: x - 10, y}});
  }

  adjustYPos(e) {
    e.preventDefault();
    e.stopPropagation();
    const {controlledPosition} = this.state;
    const {x, y} = controlledPosition;
    this.setState({controlledPosition: {x, y: y - 10}});
  }
// <Link to={`/rooms`}><div className="back">{<ArrowBackIos />}</div></Link>

  renderRoomOrLoading() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    const {deltaPosition, controlledPosition} = this.state;
   if (this.state.apiDataLoaded) {
     return (
      <>
      <div className = "room-single">

       <div className="header">
   			  <h1>{this.state.room.type}</h1>
        <Nav/>
   		 </div>

       <div className="inner">
        <div className="top">
          <h3>{this.state.room.title}</h3>
          <ScrollLock>
          <div className="room-layout">
            <img className="room-pic"src={this.state.room.url} alt={this.state.room.type} />


              <Couch/>


            <Bed/>
            <Table/>
            <Dresser/>
            <Rug/>
            <Television/>
          </div>
          </ScrollLock>
      </div>

          <div className="furn-list">
            <p>{this.state.room.description}</p>
          </div>
      </div>
       </div>
      </>
     )
   } else return <img className="loading" src="https://i.imgur.com/EATfJf4.gif" alt="...loading"></img>
 }

  render(){


    return(
    <div className="room-single">
      {this.renderRoomOrLoading()}
      <FooterNav/>
    </div>
    )
  }
}

export default RoomSingle;
