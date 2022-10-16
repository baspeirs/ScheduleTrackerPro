import React from "react";
import API from "../Utilities/API";
import "../Styles/EmployeeOps.css"


const DeleteEmployee = (props) => {
    const handleDelete = () => {
        API.deleteUser(props.id)
        .then(response => {
            alert("Successfully updated " + props.name)
            window.location.reload();
        })
        .catch(error => console.error(error))
    }

    if (props.user._id === props.id) {
        return (
            <div className="delete-form">
                <h3>You can not delete yourself</h3>
                <button type="button" class="STP-Button close-modal-btn" data-bs-dismiss="modal">Close</button>
            </div>
        )
    }
    if (props.user._id !== props.id) {
        return (
            <div className="delete-form">
                <h3>Are you sure you want to remove <u>{props.name}</u> from the system?</h3>
                <div className="form-button-group">
                    <button type="button" class="STP-Button close-modal-btn" data-bs-dismiss="modal">Close</button>
                    <button id="delete-employee-modal-btn" className="STP-Button" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        )
    }
}

export default DeleteEmployee;