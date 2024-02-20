import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import Settings from "./components/settings/Settings";
import { useDispatch } from "react-redux";
import { loadProfile } from "./actions/settingsActions";
import { profileData } from "./data/profile";
import useColorByMode from "./hooks/useColorByMode";

// TODO: PUSH TO MASTER

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProfile(profileData));
  }, [dispatch]);

  return (
    <Router>
      <div className={`App ${useColorByMode("bg-gray-900", "bg-gray-200")}`}>
        <div className="flex">
          <Sidebar />
          <Routes>
            <Route path="/investments" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
