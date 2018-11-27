import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import ExploreSingle from './ExploreSingle';
import ExploreList from './ExploreList';
import RoomSingle from './RoomSingle';
import RoomList from './RoomList';
import Tutorial from './Tutorial';
import ExploreAdd from './ExploreAdd';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/tutorial" component={Tutorial} />
            <Route exact path="/add" component={ExploreAdd}/>
            <Route exact path="/rooms" component={RoomList} />
            <Route exact path="/rooms/:id" component={RoomSingle} />
            <Route exact path="/explore" component={ExploreList} />
            <Route exact path="/explore/:id" component={ExploreSingle} />
        </Switch>
      </Router>
    );
  }
}


export default App;
