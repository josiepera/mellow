import React, { Component } from 'react';
import Explore from './Explore'
import axios from 'axios';
import FooterNav from './FooterNav'

class ExploreList extends Component {
  state = {
      apiDataLoaded: false,
      apiData: null
    }

  componentDidMount() {
    axios.get('/explore')
    	.then( res => {
    		this.setState(prevState => ({
    			apiDataLoaded: true,
    			apiData: res.data.data
    	}))
    })
  }
  renderExplore() {
		if(this.state.apiDataLoaded) {
			return this.state.apiData.map(d => {
				return (
					<Explore key={d.id} explore={d} />
				)
			})
		} else return <p>Loading...</p>
    // <iframe src="https://i.imgur.com/EATfJf4.gif"></iframe>
	}


  render(){
    return(
    <>
      <div>
        <div className='explore-list'>
  			   {this.renderExplore()}
  		   </div>
         <FooterNav/>
      </div>
    </>
    )
  }
}

export default ExploreList;
