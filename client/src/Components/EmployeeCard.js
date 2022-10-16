import React from "react";
import "../Styles/EmployeeCard.css";
import EditEmployee from "./EditEmployee";
import DeleteEmployee from "./DeleteEmployee";
import { Trash2 } from "react-feather"
import { Edit3 } from "react-feather";

const EmployeeCard = (props) => {

    return (
        <div className="employeeCard">
            <div className="employee-card-header">
                <h4 className="cardItem">{props.name}</h4>
                <div className="edit-employee">
                    <div className="employee-card-action employee-edit" data-bs-toggle="modal" data-bs-target={"#" + props.modleID}>
                        <Edit3 className="icon icon-edit" />
                    </div>
                    <div className="modal fade" id={props.modleID} tabindex="-1" aria-labelledby="EditEmployeeModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <h1 className="modalHeader">Edit Employee</h1>
                                    <EditEmployee
                                        id={props.id}
                                        name={props.name}
                                        username={props.username}
                                        email={props.email}
                                        phoneNumber={props.phoneNumber}
                                        manager={props.manager}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <span className="icon icon-delete"><img className="employee-card-action employee-edit" src={Delete} alt="Edit Employee" title="Edit Employee" data-bs-toggle="modal" data-bs-target={"#" + props.modleID}/></span> */}
                    <div className="employee-card-action employee-delete" data-bs-toggle="modal" data-bs-target={"#Delete" + props.modleID}>
                        <Trash2 className="icon icon-trash"/>
                    </div>
                    <div class="modal fade" id={"Delete" + props.modleID} tabindex="-1" aria-labelledby="DeleteEmployeeModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <h1 className="modalHeader">Delete Employee</h1>
                                    <DeleteEmployee
                                        id={props.id}
                                        user={props.user}
                                        name={props.name}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="cardItem">User Name: {props.username}</p>
            <p className="cardItem">Email: {props.email}</p>
            <p className="cardItem">Phone Number: {props.phoneNumber}</p>
        </div>
    )
}

export default EmployeeCard