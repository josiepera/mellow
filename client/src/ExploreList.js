import React, { Component } from 'react';
import Explore from './Explore'
import axios from 'axios';
import FooterNav from './FooterNav'
import Nav from './Nav'


class ExploreList extends Component {
  state = {
      apiDataLoaded: false,
      apiData: null,
      filter: 'all'
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

  handleFilterClick(filter) {
 console.log('setting filter to', filter)
 this.setState(prevState => ({
 filter
 }))
}

  render(){

    const filterall = (this.state.filter) === 'all' ? 'is-active' : ''
    const filterfaves = (this.state.filter) === 'faves' ? 'is-active' : ''

    return(
    <>
      <div>
        <div className="header">
          <img src="https://i.imgur.com/mr5n2en.png" alt="header"/>
          <Nav/>
        </div>

        <div className="search-bar">
          <input className='search-txt' type="text" name="" placeholder="   Search"/>
        </div>
        <div>
          <ul className="filter">
            <li>Bedroom</li>
            <li>Living Room</li>
            <li>Kitchen</li>
            <li>Closet</li>
          </ul>
        </div>
        <div>
          <ul className="specific">
            <li>Small Space</li>
            <li>Budget Friendly</li>
            <li>Organization</li>
          </ul>
        </div>
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
