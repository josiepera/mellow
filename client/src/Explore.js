import React from 'react';
import { Link } from 'react-router-dom';
import FooterNav from './FooterNav';

  // <img src={props.explore.url} />
const Explore = (props) => {
	return(
		<>
			<div>
					<div className="header">
						<h1>Mellow</h1>
					</div>
					<div className="ex-inlist">
					 <div className="explore-container">
      			 <Link to={`/explore/${props.explore.id}`}><img src={props.explore.url} alt={props.explore.name}/></Link>
      		   <h2>{props.explore.name}</h2>
						 <p>{props.explore.title}</p>
					 </div>
    			</div>
					<FooterNav/>
			</div>
		</>
	)
}

export default Explore;
