import React from 'react'
import AddEmployee from "../Components/AddEmployee";
import "../Styles/EmployeeOps.css"

export default function PostModal(props) {
    return (
        <div>
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