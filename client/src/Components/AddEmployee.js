import React, { useState } from "react";
import API from "../Utilities/API";

const AddEmployee = () => {
    const [userState, setUserState] = useState({
        username: "",
        password: "",
        email: "",
        name: "",
        phoneNumber: "",
        manager: false
    })

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUserState({
            ...userState,
            [name]: value
        });
    };

    const handleSubmit = () => {
        API.saveUser({
            username: userState.username,
            name: userState.name,
            email: userState.email,
            password: userState.password,
            phoneNumber: userState.phoneNumber,
            manager: userState.manager
        })
            .then(result => {
                console.log(result)
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
            })
    };

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

    return (
        <div>
            <form id="new-employee-form">
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
                    <label type="password" placeholder="Password">Password</label>
                    <input type="password" className="form-control" name="password" value={userState.password} onChange={handleInputChange} />
                </div>
                
                <div className="form-group">
                    <label type="text" placeholder="Phone Number">Phone Number</label>
                    <input type="text" className="form-control" name="phoneNumber" value={userState.phoneNumber} onChange={handleInputChange} />
                </div>
                <div class="form-group form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" name="manager" onChange={handleCheck} />
                    <label class="form-check-label" for="defaultCheck1">Is employee a Manager?</label>
                </div>
                
            </form>
            <div className="form-button-group">
                    <button type="button" class="STP-Button close-modal-btn" data-bs-dismiss="modal">Close</button>
                    <button id="add-employee-modal-btn" className="STP-Button" onClick={handleSubmit}>+ Add Employee</button>
                </div>
        </div>
    )
}

export default AddEmployee;