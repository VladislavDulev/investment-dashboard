import React from "react";
import { getColorByMode } from "../../../utils/utils";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import ProfilePicture from "../../../assets/icons/profile-picture.png";

const Header = () => {
  const profile = useSelector((state: RootState) => state.settings.data);
  const isDarkMode = useSelector(
    (state: RootState) => state.sidebar.isDarkMode
  );

  const greeting = `👋 Welcome ${profile?.fistName}!`;

  return (
    <h1
      className={`header font-red-hat-display text-4xl font-normal p-8 flex justify-between items-center`}
    >
      <div
        className={`${getColorByMode(
          isDarkMode,
          "text-gray-100",
          "text-gray-800"
        )}`}
      >
        {greeting}
      </div>
      <div>
        <img src={ProfilePicture} alt="Avatar" className="w-12" />
      </div>
    </h1>
  );
};

export default Header;
