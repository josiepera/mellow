import React, { Component } from 'react';
import axios from 'axios';
import Furniture from './Furniture'

class FurnitureList  extends Component {
  state = {
      apiDataLoaded: false,
      apiData: null
    }

  componentDidMount() {
    axios.get('/furniture_list')
    	.then( res => {
    		this.setState(prevState => ({
    			apiDataLoaded: true,
    			apiData: res.data.data
    	}))
    })
  }
  renderFurniture() {
		if(this.state.apiDataLoaded) {
			return this.state.apiData.map(d => {
				return (
					<Furniture key={d.id} furniture={d} />
				)
			})
		} else return <p>Loading...</p>
	}


  render(){
    return(
    <>
      <div className='furniture-list'>
  			{this.renderFurniture()}
  		</div>
    </>
    )
  }
}

export default FurnitureList;
