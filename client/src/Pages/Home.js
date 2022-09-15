import React, { useState } from "react";
import "../Home.css";
import logo from '../logo.svg';
import API from "../Utilities/API";

const Home = (props) => {
    const [userState, setUserState] = useState({
        username: "",
        password: "",
        error: "",
        display: false,
        redirect: "/",
        loggedIn: true
    })

    const login = e => {
        e.preventDefault();
        API.login({
            username: userState.username,
            password: userState.password
        })
            .then(res => {
                if (res.data.message) {
                    setUserState({
                        error: res.data.message
                    });
                } else {
                    console.log("login successful")
                    props.isAuthorized();
                    setUserState({ ...userState, loggedIn: true })
                }
            })
            .catch(err => {
                console.log(err);
                setUserState({ error: "A server error has occured." });
            });

        setUserState({ password: "" });
    }

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUserState({
            ...userState,
            [name]: value
        });
    };
    return (
        <header className="App-header">
            <h1>Schedule Tracker PRO</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <form>
                <div className="form-group">
                <label type="text" placeholder="Username">Username</label>
                <input type="text" className="form-control" name="username" value={userState.username} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                <label type="password" placeholder="password">Password</label>
                <input type="password" className="form-control" name="password" value={userState.password} onChange={handleInputChange} />
                </div>
                <button type="submit" onClick={login}>Login</button>
            </form>


        </header>
    )
}

export default Home;