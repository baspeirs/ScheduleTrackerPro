import React from "react";
import "../Styles/EmployeeCard.css"

const EmployeeCard = (props) => {

    return (
        <div className="employeeCard">
            <p className="cardItem">{props.name} | </p>
            <p className="cardItem">{props.userName} | </p>
            <p className="cardItem">{props.email} | </p>
            <p className="cardItem">{props.phoneNumber} | </p>
        </div>
    )
}

export default EmployeeCard