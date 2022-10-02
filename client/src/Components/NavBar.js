import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/NavBar.css"

export default function NavBar(props) {
  return (
    <div className="navBar">
      <img src={require("../Images/ScheduleTrackerPro.png")} id="logo-nav" alt="logo" />
      <div id="nav-button-holder">
        <button className='nav-item'><Link to="/storeSchedule">Store Schedule</Link></button>
        <button className='nav-item'><Link to="/individualSchedule">Individual Schedule</Link></button>
        <button className='nav-item'><Link to="/employeeOps">Employee Ops</Link></button>
        <button className='nav-item' onClick={props.logout}>Log Out</button>
      </div>
    </div>
    // class to add forselected page: className="is-active"
  )
}