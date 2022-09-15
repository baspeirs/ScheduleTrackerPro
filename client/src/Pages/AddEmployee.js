import React, { useState } from "react";
import API from "../Utilities/API";

const AddEmployee = () => {
    const [userState, setUserState] = useState({
        username: "",
        password: "",
        email: "",
        name: "",
        phoneNumber: "",
        manager: true
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
                alert("Employee successfully added!");
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
            })
    };

    return(
        <div>
            <h2>Add your first employee</h2>
            <form>
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
                <label type="text" placeholder="Name (first and last)">Name (first and last)</label>
                <input type="text" className="form-control" name="name" value={userState.name} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                <label type="text" placeholder="Phone Number">Phone Number</label>
                <input type="text" className="form-control" name="phone number" value={userState.phoneNumber} onChange={handleInputChange} />
                </div>
                <button onClick={handleSubmit}>Add Employee</button>
            </form>
        </div>
    )
}

export default AddEmployee;