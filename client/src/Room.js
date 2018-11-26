import React from 'react';
import { Link } from 'react-router-dom';
import FooterNav from './FooterNav';
import ArrowRight from "@material-ui/icons/ArrowRight";

  // <img src={props.explore.url} />
const Room = (props) => {
	return(
	<div className="room-inlist">
		<Link to={`/rooms/${props.room.id}`}>
      <h2>{props.room.type}</h2>
			<div className="forward-arrow">{<ArrowRight />}</div>
		</Link>
      <FooterNav/>
  </div>
	)
}

export default Room;
