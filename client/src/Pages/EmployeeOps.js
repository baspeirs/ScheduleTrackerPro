import React from "react";
import EmployeeDirectory from "../Components/EmployeeDirectory";
import NewEmployeeModal from "../Components/NewEmployeeModal"
import "../Styles/EmployeeOps.css";
import NavBar from "../Components/NavBar";
const EmployeeOps = (props) => {

    return (
        <div id="employeeOps">
            <NavBar logout={props.logout} />
            <NewEmployeeModal />
            <h1 id="EmployeeDirectory-header">EmployeeDirectory</h1>

            <div className="content container">
                <EmployeeDirectory

                />
            </div>
        </div>

    )
}

export default EmployeeOps