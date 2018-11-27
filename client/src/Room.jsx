import React from 'react';
import { Link } from 'react-router-dom';
import FooterNav from './FooterNav';
import Add from "@material-ui/icons/Add";

  // <img src={props.explore.url} />
const Room = (props) => {
	return(
		<>
			<Link to={`/rooms/${props.room.id}`}>
			<div className="room-inlist">
      		<h2>{props.room.type}</h2>
					<div className="forward-arrow">{<Add />}</div>
  		</div>
			</Link>
			<FooterNav/>
		</>
	)
}

export default Room;
