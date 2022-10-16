import React, { useEffect, useState } from "react";
import API from "../Utilities/API";
import EmployeeCard from "./EmployeeCard";

const EmployeeDirectory = (props) => {
    const [directoryState, setDirectoryState] = useState({
        employeeList: []
    })

    useEffect(() => {
        API.getDirectory()
        .then(data => {
            setDirectoryState({employeeList: data.data})
        })
        .catch(err => {console.error(err)})
    }, [])

    return (
        <div id="employeeDirectory">
            {directoryState.employeeList.map(employee => (
                <EmployeeCard
                    user={props.user}
                    id={employee._id}
                    name={employee.name}
                    username={employee.username}
                    email={employee.email}
                    phoneNumber={employee.phoneNumber}
                    manager={employee.manager}
                    modleID={employee.username}
                    modleTarget={"#" + employee.username}
                />
            ))}
        </div>
    )
}

export default EmployeeDirectory;