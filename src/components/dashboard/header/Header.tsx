import React from "react";
import { getColorByMode } from "../../../utils/utils";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";

const Header = () => {
  const isDarkMode = useSelector(
    (state: RootState) => state.sidebar.isDarkMode
  );

  return (
    <div
      className={`${getColorByMode(
        isDarkMode,
        "text-gray-100",
        "text-gray-800"
      )} font-red-hat-display text-4xl font-normal p-8`}
    >
      👋 Welcome Brian!
    </div>
  );
};

export default Header;
