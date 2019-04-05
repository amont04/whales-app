import React from 'react';
import './SideDrawer.css';
import {Link } from "react-router-dom";

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
    <nav className={drawerClasses}>
        <ul>
        <li><Link to={'/'}>Home</Link></li>
                          <li><Link to={'/lineup'}>Lineup</Link></li>
                          <li><Link to={'/roster'}>Roster</Link></li>
                          <li><Link to={'/schedule'}>Schedule</Link></li>
        </ul>
    </nav>
    );
};

export default sideDrawer;