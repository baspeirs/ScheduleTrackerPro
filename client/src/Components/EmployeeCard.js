import React from "react";
import "../Styles/EmployeeCard.css";

const EmployeeCard = (props) => {

    return (
        <div className="employeeCard">
            <h4 className="cardItem">{props.name}</h4>
            <p className="cardItem">User Name: {props.userName}</p>
            <p className="cardItem">Email: {props.email}</p>
            <p className="cardItem">Phone Number: {props.phoneNumber}</p>
        </div>
    )
}

export default EmployeeCard