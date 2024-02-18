import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";

// TODO: PUSH TO MASTER
//TODO: SEE IF ERRORS TO FIX
function App() {
  return (
    <div className="App bg-gray-900">
      <div className="flex">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
