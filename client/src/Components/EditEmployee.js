import React, { useState } from "react";
import API from "../Utilities/API";


const EditEmployee = (props) => {

    const [userState, setUserState] = useState({
            name: props.name,
            email: props.email,
            username: props.username,
            phoneNumber: props.phoneNumber,
            manager: props.manager,
            id: props.id
    });

    const handleCheck = e => {
        const name = e.target.name;
        if (e.target.checked) {
            setUserState({
                ...userState,
                [name]: true
            })
        } else {
            setUserState({
                ...userState,
                [name]: false
            })
        }
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUserState({
            ...userState,
            [name]: value
        });
    };

    const handleUpdate = () => {
        API.updateUser(
            userState.id,
            {
            username: userState.username,
            name: userState.name,
            email: userState.email,
            phoneNumber: userState.phoneNumber,
            manager: userState.manager
            }
        )
            .then(result => {
                alert("Successfully updated " + userState.name)
                window.location.reload();
            })
            .catch(err => {
                console.error(err);
                alert("Unable to update " + userState.name)
            })
    }

    return (
        <div>
            <form className="edit-employee-form">
                <div className="form-group">
                    <label type="text" placeholder="Name (first and last)">First and Last Name</label>
                    <input type="text" className="form-control" name="name" value={userState.name} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label type="text" placeholder="Email">Email</label>
                    <input type="text" className="form-control" name="email" value={userState.email} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label type="text" placeholder="Username">Username</label>
                    <input type="text" className="form-control" name="username" value={userState.username} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label type="text" placeholder="Phone Number">Phone Number</label>
                    <input type="text" className="form-control" name="phoneNumber" value={userState.phoneNumber} onChange={handleInputChange} />
                </div>
                <div class="form-group form-check">
                    <input class="form-check-input" type="checkbox" checked={userState.manager} value="" name="manager" onChange={handleCheck} />
                    <label class="form-check-label" htmlFor="defaultCheck1">Is employee a Manager?</label>
                </div>

            </form>
            <div className="form-button-group">
                <button type="button" class="STP-Button close-modal-btn" data-bs-dismiss="modal">Close</button>
                <button id="add-employee-modal-btn" className="STP-Button" onClick={handleUpdate}>Update</button>
            </div>
        </div>
    )
}

export default EditEmployee;