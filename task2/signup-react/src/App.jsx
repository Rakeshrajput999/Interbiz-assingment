import React from "react";
import SignUp from "./signUpForm/SignUp";
import UserTable from "./userTable/UserTable";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="card">
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/users" element={<UserTable />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
