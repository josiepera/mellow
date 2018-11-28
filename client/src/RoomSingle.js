import React, { Component } from 'react';
import FooterNav from './FooterNav'
import axios from 'axios';
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import { Link } from 'react-router-dom';
// import FurnitureList from './FurnitureList';
import Draggable from 'react-draggable';

class RoomSingle extends Component {
  state = {
		room: null,
		apiDataLoaded: false,
    show: true,
    show_bed: true,
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
  toggleBed = () => {
    this.setState(prevState => ({
      show_bed: !prevState.show_bed
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

            <div onClick={this.toggleInfo.bind(this)}>
              <h2>Couch</h2>
     			  </div>
                {this.state.show &&
                  <Draggable {...dragHandlers}>
                  <img className="couch" src='https://i.imgur.com/c5W0zAX.png' alt='couch' />
                  </Draggable>
                }

            <div onClick={this.toggleBed.bind(this)}>
              <h2>Bed</h2>
     			  </div>
                 {this.state.show &&
                  <Draggable {...dragHandlers}>
                  <img className="bed" src='https://i.imgur.com/m3NDjpZ.png' alt='bed' />
                  </Draggable>
                  }

            <div onClick={this.toggleBed.bind(this)}>
              <h2>table</h2>
           	</div>
                  {this.state.show &&
                  <Draggable {...dragHandlers}>
                  <img className="table" src='https://i.imgur.com/VPjTigf.png' alt='table' />
                  </Draggable>
                  }

            <div onClick={this.toggleBed.bind(this)}>
              <h2>Dresser</h2>
            </div>
                  {this.state.show &&
                  <Draggable {...dragHandlers}>
                  <img className="dresser" src='https://i.imgur.com/fkmp28u.png' alt='dresser' />
                  </Draggable>
                  }

            <div onClick={this.toggleBed.bind(this)}>
              <h2>Rug</h2>
            </div>
                  {this.state.show &&
                  <Draggable {...dragHandlers}>
                  <img className="rug" src='https://i.imgur.com/tGb0Q1a.png' alt='rug' />
                  </Draggable>
                  }

              <div onClick={this.toggleBed.bind(this)}>
                 <h2>Televisionr</h2>
              </div>
                  {this.state.show &&
                  <Draggable {...dragHandlers}>
                  <img className="tv" src='https://i.imgur.com/CkqPcin.png' alt='tv' />
                  </Draggable>
                  }
          </div>

        </div>
          <div className="furn-list">
            FurnitureList
            <p>{this.state.room.description}</p>
          </div>

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
