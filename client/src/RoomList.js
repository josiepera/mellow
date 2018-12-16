import React, { Component } from 'react';
import axios from 'axios';
import Room from './Room';
import Nav from './Nav';

class RoomList extends Component{
  state = {
      apiDataLoaded: false,
      apiData: null
    }

    componentDidMount() {
      axios.get('/rooms')
      	.then( res => {
      		this.setState(prevState => ({
      			apiDataLoaded: true,
      			apiData: res.data.data
      	}))
      })
    }
    renderRooms() {
  		if(this.state.apiDataLoaded) {
  			return this.state.apiData.map(d => {
  				return (
  					<Room key={d.id} room={d} />
  				)
  			})
  		} else return <p>Loading...</p>
  	}

  render(){
    return(
    <>
      <div className="header">
  			<h1>My Rooms</h1>
        <Nav/>
  		</div>
      <div className='room-list'>
				{this.renderRooms()}
			</div>
    </>

    )
  }
}

export default RoomList;
