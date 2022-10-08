import React from 'react'
import AddEmployee from "../Components/AddEmployee";
import "../Styles/EmployeeOps.css"

export default function PostModal(props) {
    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            {/* <button type="button" className="modalBtn" title="Add Employee" data-toggle="modal" data-target="#AddEmployeeModal">
                <p>Add Employee</p>
            </button> */}

            {/* <!-- Modal --> */}
            {/* <div className="modal fade" id="AddEmployeeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <AddEmployee
                        />
                    </div>
                </div>
            </div> */}
            <button type="button" id='add-employee-button' class="STP-Button" title="Add Employee" data-bs-toggle="modal" data-bs-target="#AddEmployeeModal">
                Add Employee
            </button>
            <div class="modal fade" id="AddEmployeeModal" tabindex="-1" aria-labelledby="AddEmployeeModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            <h1 className="modalHeader">+ Add New Employee</h1>
                        <AddEmployee
                        />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}