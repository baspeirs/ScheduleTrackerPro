import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/NavBar.css"

export default function NavBar(props) {
  return (
    <div className="navBar">
      <img src={require("../Images/ScheduleTrackerPro.png")} id="logo-nav" alt="logo" />
      <div id="nav-button-holder">

        <Link to="/storeSchedule"><div className='nav-item'><p>Store Schedule</p></div></Link>


        <Link to="/individualSchedule"><div className='nav-item'><p>Individual Schedule</p></div></Link>
        {props.user.manager 
        ? <Link to="/employeeOps"><div className='nav-item'><p>Employee Ops</p></div></Link>
        : <div></div>
        }
        

        <div className='nav-item'>
          <p onClick={props.logout}>Log Out</p>
        </div>
      </div>
    </div>
    // class to add forselected page: className="is-active"
  )
}