import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // add Redirect, later
import StoreSchedule from './Pages/StoreSchedule';
import Home from "./Pages/Home";
import "./Styles/App.css"

function App() {
  return (
    <div className="App">

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
          <Route path="/" element={<Home />} />
          <Route path="/storeSchedule" element={<StoreSchedule />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
