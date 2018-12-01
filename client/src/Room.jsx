import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import FooterNav from './FooterNav';
import Add from "@material-ui/icons/Add";
import AddCircle from '@material-ui/icons/AddCircle';
import Chip from '@material-ui/core/Chip';
  // <img src={props.explore.url} />
	// {props.room.type}
class Room extends Component{
	state = {
		show: false
	}

	toggleRoom = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }
	render(){
	return(
		<>


			<div className="room-inlist">
      		<h2> My Rooms</h2>
					<div className="forward-arrow" onClick={this.toggleRoom.bind(this)}>
					<Chip
						avatar={<AddCircle />}
        		label="Add Room"
      		/>
					</div>
  		</div>

				{this.state.show&&
					<Link to={`/rooms/${this.props.room.id}`}>
				<div className="add-room">
					<img src="https://i.imgur.com/gvHk5Vq.png" alt="add bedroom"/>
				</div>
					</Link>
				}


			<FooterNav/>
		</>
	)
}
}

export default Room;
