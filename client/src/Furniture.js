import React from 'react';
import { Link } from 'react-router-dom';
import FooterNav from './FooterNav';
import Draggable from 'react-draggable';

const Furniture = (props) => {

	return(
		 <>
			  <div>
        <div className="suggestions">
         <img src={props.furniture.url} alt="furniture"/>
         <div className="side">
          <div className="sugg-header">
             <h4>{props.furniture.title}</h4>
             <p>{props.furniture.store}</p>
           </div>
           <p>{props.furniture.short_desc}</p>
           <p className="desc">{props.furniture.long_desc}</p>
         </div>
        </div>
          <FooterNav/>
			</div>
		</>
	)

}

export default Furniture;
