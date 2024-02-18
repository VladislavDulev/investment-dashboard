import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";

// TODO: PUSH TO MASTER
//TODO: SEE IF ERRORS TO FIX
function App() {
  return (
    <Router>
      <div className="App bg-gray-900">
        <div className="flex">
          <Sidebar />
          <Routes>
            <Route path="/investments" element={<Dashboard />} />
            {/* <Route path="/settings" element={<Settings />} /> */}
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
