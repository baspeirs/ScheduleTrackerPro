import React from "react";
import EmployeeDirectory from "../Components/EmployeeDirectory";
import NewEmployeeModal from "../Components/NewEmployeeModal"
import "../Styles/EmployeeOps.css";
import NavBar from "../Components/NavBar";
const EmployeeOps = (props) => {

    return (
        <div id="employeeOps">
            <NavBar user={props.user} logout={props.logout} />
            <NewEmployeeModal />
            <h1 id="EmployeeDirectory-header">Employee Directory</h1>

            <div className="content container">
                <EmployeeDirectory
                    user={props.user}
                />
            </div>
        </div>

    )
}

export default EmployeeOps