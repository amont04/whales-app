import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import Lineup from './components/Lineup/Lineup';
import Roster from './components/Roster/Roster';
import Schedule from './components/Schedule/Schedule';
import Hero from './components/Home/Hero';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
this.setState ((prevState) => {
  return {sideDrawerOpen: !prevState.sideDrawerOpen}
});
};

backdropClickHandler = () => {
  this.setState({sideDrawerOpen:false});
};

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (

        
      <div style={{height: '100%'}}>
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
      <SideDrawer show={this.state.sideDrawerOpen} />
      {backdrop}

      <Switch>
      <Route exact path="/" component={Hero} />
      <Route path="/Lineup" component={Lineup} />
      <Route path="/Roster" component={Roster} />
      <Route path="/Schedule" component={Schedule} />
      </Switch>

      </div>
    )
  }
}

export default App;

