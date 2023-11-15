import React, { useState } from "react";
import API from "../Utilities/API";
import "../Styles/Home.css"

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
        <div>
            <div id="log-inCard">
                <img src={require("../Images/ScheduleTrackerPro.png")} id="logo" alt="logo" />
                <h2 id="login-subHeader">Streamline your schedule.</h2>
                <form>
                    <div className="login-inputs">
                        <div className="form-group">
                            <label type="text" placeholder="Username" id="username-text">Username</label>
                            <input type="text" className="form-control" id="username-input" name="username" value={userState.username} onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label id="password-text" type="password" placeholder="password">Password</label>
                            <input id="password-input" type="password" className="form-control" name="password" value={userState.password} onChange={handleInputChange} />
                        </div>
                    </div>
                    <button id="login-submit" type="submit" onClick={login}>Login</button>
                </form>
                <div id="demo">
                    <p>This is a demo page, feel free to log in and test the functionality!</p>
                    <p>username: sample | password: sampleuser</p>
                </div>
            </div>
            <img src={require("../Images/BGColor.png")} id="hero" alt="hero" />
        </div>
    )
}


export default Home;