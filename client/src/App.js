import React, { useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom"; // add Redirect, later
import StoreSchedule from './Pages/StoreSchedule';
import Home from "./Pages/Home";
import "./Styles/App.css";
import API from "./Utilities/API"
// import AddEmployee from "./Pages/AddEmployee";

function App() {
  let [authState, setAuthState] = useState({
    authorized: false,
    display: false,
    user: {}
  });

  useEffect(() => {
    isAuthorized();
  }, [])


  const isAuthorized = () => {
    API.isAuthorized()
      .then(res => {
        setAuthState({
          authorized: res.data.message ? false : true,
          display: true,
          user: res.data.message ? {} : res.data,
        })
      })
      .catch(err => {
        console.log(err);
        setAuthState({ 
          authorized: false,
          display: true 
        });
      });
  };

  const logout = e => {
    e.preventDefault();
    API.logout()
      .then(res => {
        console.log(res.data.message)
        isAuthorized()
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="App">
      {authState.display ? (
        <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/storeSchedule">Store Schedule</Link>
              </li>
            </ul>
          </nav>

          {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/" element={authState.authorized ? <Navigate to="/storeSchedule" /> : <Home isAuthorized={isAuthorized}/>} />
            <Route path="/storeSchedule" element={authState.authorized ? <StoreSchedule logout={logout} /> : <Navigate to="/" />}/>
          </Routes>
        </div>
      </Router>
      )
    : ""}
      
    </div>
  );
}

export default App;
