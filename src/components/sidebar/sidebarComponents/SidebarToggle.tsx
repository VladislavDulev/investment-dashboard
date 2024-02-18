import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Toggle from "react-toggle";
import { RootState } from "../../../reducers";
import { toggleTheme } from "../../../actions/sidebarActions";

const SidebarToggle = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(
    (state: RootState) => state.sidebar.isDarkMode
  );

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <Toggle
        checked={isDarkMode}
        onChange={handleToggle}
        className="m-8"
        icons={false}
      />
    </div>
  );
};

export default SidebarToggle;
