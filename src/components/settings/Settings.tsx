import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../../reducers";

import { IProfile } from "../interfaces/profile";
import { updateProfileField } from "../../actions/settingsActions";
import ProfilePicture from "../../assets/icons/profile-picture.png";
import { getColorByMode } from "../../utils/utils";

const Settings = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state: RootState) => state.settings.data);

  const isDarkMode = useSelector(
    (state: RootState) => state.sidebar.isDarkMode
  );

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(updateProfileField(name as keyof IProfile, value));
  };

  return (
    <div className="settings w-full">
      <div className="flex flex-col items-center justify-center h-screen">
        <img src={ProfilePicture} alt="Avatar" className="w-60" />
        <h2
          className={`${getColorByMode(
            isDarkMode,
            "text-gray-100",
            "text-gray-800"
          )} font-red-hat-display text-4xl font-normal p-8`}
        >
          Edit Profile
        </h2>
        <form>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="firstName"
              className="text-gray-600 font-red-hat-display text-base font-normal"
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              name="fistName"
              value={profile?.fistName || ""}
              onChange={handleFieldChange}
              className="rounded-lg px-4 py-2 border"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="lastName"
              className="text-gray-600 font-red-hat-display text-base font-normal"
            >
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={profile?.lastName || ""}
              onChange={handleFieldChange}
              className="rounded-lg px-4 py-2 border"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="age"
              className="text-gray-600 font-red-hat-display text-base font-normal"
            >
              Age
            </label>
            <input
              id="age"
              type="number"
              name="age"
              value={profile?.age || ""}
              onChange={handleFieldChange}
              className="rounded-lg px-4 py-2 border"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
