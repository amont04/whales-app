import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import Logo from '../../assets/whales-logo.png'
import {Link } from "react-router-dom";

const toolbar = props => (
  
      <header className="toolbar">
          <nav className="toolbar__navigation">
            <div>
              <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="spacer" />
            <div className="toolbar__logo"><a href="/"><img src={Logo} /></a></div>

                        {/* <div className="toolbar__navigation-items">
                        <ul>            
                          <li><Link to={'/'}>Home</Link></li>
                          <li><Link to={'/lineup'}>Lineup</Link></li>
                          <li><Link to={'/roster'}>Roster</Link></li>
                          <li><Link to={'/schedule'}>Schedule</Link></li>
                        </ul>
                        </div>       */}

          </nav>
      </header>

);

export default toolbar;
 