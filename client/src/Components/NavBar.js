import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
    return (
        <div className="navBar">
            <nav>
            <ul>
              <li>
                <Link to="/storeSchedule">Store Schedule</Link>
              </li>
              <li>
                <Link to="/individualSchedule">Individual Schedule</Link>
              </li>
              <li>
                <Link to="/employeeOps">Employee Ops</Link>
              </li>
              <li>
                <button onClick={props.logout}>Log Out</button>
              </li>
            </ul>
          </nav>
        </div>
        // class to add forselected page: className="is-active"
    )
}