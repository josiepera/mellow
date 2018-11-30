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


  renderRoomOrLoading() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    const {deltaPosition, controlledPosition} = this.state;
   if (this.state.apiDataLoaded) {
     return (
      <>
       <div className="header">
        <Link to={`/rooms`}><div className="back">{<ArrowBackIos />}</div></Link>
        <div>
   			  <h1>{this.state.room.type}</h1>
        </div>
   		 </div>
       <div className="inner">
        <div className="top">
          <h3>{this.state.room.title}</h3>
          <div className="room-layout">
            <img className="room-pic"src={this.state.room.url} alt={this.state.room.type} />


            <Couch/>
            <Bed/>
            <Table/>
            <Dresser/>
            <Rug/>
            <Television/>
          </div>

        </div>
          <div className="furn-list">
            <p>{this.state.room.description}</p>
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
