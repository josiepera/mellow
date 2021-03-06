import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import FooterNav from './FooterNav';
import Nav from './Nav';

class ExploreAdd extends Component{
  state = {
    newId: "",
    name: "",
    location: "",
    profile_url: "",
    url: "",
    title: "",
    size: "",
    description: "",
    fireRedirect:false
  }

  handleInputChange(e){
	  console.log(e.target.value)
	  const name = e.target.name
	  const value = e.target.value
	  this.setState(prevState => ({
	  	[name]:value
	  }))
	}



  handleFormSubmit(e){
	  e.preventDefault()
	  axios.post('/explore',  {
        name:this.state.name,
        location:this.state.location,
	      profile_url: this.state.profile_url,
	      url:this.state.url,
        title: this.state.title,
        size: this.state.size,
        description: this.state.description,
	  }).then(res => {
	  	this.setState({
	  		newId: res.data.data.id,
        fireRedirect:true
	  	})
	  })
    .catch(err => console.log(err));
    e.target.reset();
	}

  render(){
    return(
    <>
      <div className="header">
        <h1>Add Your Space</h1>
        <Nav/>
      </div>
      <div className="add">
        <form onSubmit={(e) => this.handleFormSubmit(e)}>
          <label>
            Profile Pic
            <input
              type="text"
              placeholder="Profile URL"
              name="profile_url"
              value={this.state.profile_url}
              onChange={(e) => this.handleInputChange(e)}
              />
          </label>
          <label>
            Name
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={(e) => this.handleInputChange(e)}
              />
          </label>
          <label>
            Location
            <input
              type="text"
              placeholder="Location"
              name="location"
              value={this.state.location}
              onChange={(e) => this.handleInputChange(e)}
              />
          </label>
          <label>
            Room Layout
            <input
              type="text"
              placeholder="Room Layout URL"
              name="url"
              value={this.state.url}
              onChange={(e) => this.handleInputChange(e)}
              />
          </label>
          <label>
            Title
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={this.state.title}
              onChange={(e) => this.handleInputChange(e)}
              />
          </label>
          <label>
            Size (Sq.Ft.)
            <input
              type="text"
              placeholder="Size"
              name="size"
              value={this.state.size}
              onChange={(e) => this.handleInputChange(e)}
              />
          </label>
          <label>
            Description of Layout
            <input
              type="text"
              placeholder="Description"
              name="description"
              value={this.state.description}
              onChange={(e) => this.handleInputChange(e)}
              />
          </label>
          <input className="submit-button" type="submit" value="submit yo space" />
        </form>
        {this.state.fireRedirect
        ? <Redirect push to={`/explore/${this.state.newId}`} />
          : ''}
      </div>
      <FooterNav/>
    </>
    )
  }
}

export default ExploreAdd;
