import React, { useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import StoreSchedule from './Pages/StoreSchedule';
import Home from "./Pages/Home";
import "./Styles/App.css";
import API from "./Utilities/API";
import IndividualSchedule from "./Pages/IndividualSchedule";
import EmployeeOps from "./Pages/EmployeeOps";

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

          {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/" element={authState.authorized ? <Navigate to="/storeSchedule" /> : <Home isAuthorized={isAuthorized}/>} />
            <Route path="/storeSchedule" element={authState.authorized ? <StoreSchedule user={authState.user} logout={logout} /> : <Navigate to="/" />}/>
            <Route path="/individualSchedule" element={authState.authorized ? <IndividualSchedule user={authState.user} logout={logout} /> : <Navigate to="/" />}/>
            <Route path="/employeeOps" element={authState.authorized ? <EmployeeOps user={authState.user} logout={logout} /> : <Navigate to="/" />}/>
          </Routes>
        </div>
      </Router>
      )
    : ""}
      
    </div>
  );
}

export default App;
