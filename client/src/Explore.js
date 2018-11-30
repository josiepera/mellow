import React from 'react';
import { Link } from 'react-router-dom';
import FooterNav from './FooterNav';

//<img className="preview-pic" src={props.explore.profile_url} alt="Profile Pic" />
  // <img src={props.explore.url} />
const Explore = (props) => {
	return(
		<>
			<div>
					
					<div className="ex-inlist">
						<Link to={`/explore/${props.explore.id}`}><img src={props.explore.url} alt={props.explore.name}/></Link>
					 <div className="explore-container">
					 		<div>
						 		<h2>{props.explore.name}</h2>
						 		<p>{props.explore.title}</p>
							</div>
					 </div>
    			</div>
					<FooterNav/>
			</div>
		</>
	)
}

export default Explore;
