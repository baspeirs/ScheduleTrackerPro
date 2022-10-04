import React from "react";

const EmployeeCard = (props) => {


    return (
        <div className={props.classType}>
            <h3 className="shift">{props.shift.shift}</h3>
            <h4 className="name">{props.shift.name}</h4>
        </div>
    )
} 

export default EmployeeCard