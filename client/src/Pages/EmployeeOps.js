import React from "react";
import AddEmployee from "../Components/AddEmployee";
import EmployeeDirectory from "../Components/EmployeeDirectory";
import "../Styles/EmployeeOps.css";
import NavBar from "../Components/NavBar";
const EmployeeOps = (props) => {

    return (
        <div id="employeeOps">
            <NavBar logout={props.logout} />

            <div className="content container">
                <EmployeeDirectory

                />
                <AddEmployee

                />
            </div>
        </div>

    )
}

export default EmployeeOps