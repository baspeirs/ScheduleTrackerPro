import React, { useEffect, useState } from "react";
import API from "../Utilities/API";
import EmployeeCard from "./EmployeeCard";

//,
// username: "",
// password: "",
// email: "",
// name: "",
// phoneNumber: "",
// manager: true

const EmployeeDirectory = (props) => {
    const [directoryState, setDirectoryState] = useState({
        employeeList: []
    })

    useEffect(() => {
        API.getDirectory()
        .then(data => {
            console.log(data)
            setDirectoryState({employeeList: data.data})
        })
        .catch(err => {console.error(err)})
    }, [])

    return (
        <div id="employeeDirectory">
            <h2>Le Directory</h2>
            {directoryState.employeeList.map(employee => (
                <EmployeeCard
                    name={employee.name}
                    userName={employee.username}
                    email={employee.email}
                    phoneNumber={employee.phonenumber}
                />
            ))}
        </div>
    )
}

export default EmployeeDirectory;