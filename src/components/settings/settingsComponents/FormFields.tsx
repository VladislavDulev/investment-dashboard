import React, { ChangeEvent } from "react";

import { useDispatch } from "react-redux";
import { updateProfileField } from "../../../actions/settingsActions";

import useColorByMode from "../../../hooks/useColorByMode";
import { IProfile } from "../../../interfaces/profile";
import { useProfileData } from "../../../hooks/useProfileData";

interface IFormFields {
  isInputEnabled: boolean;
}

const FormFields = ({ isInputEnabled }: IFormFields) => {
  const dispatch = useDispatch();

  const profileData = useProfileData();

  const handleFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(updateProfileField(name as keyof IProfile, value));

    const updatedProfile = { ...profileData, [name]: value };

    localStorage.setItem("profile", JSON.stringify(updatedProfile));
  };

  const enabledStyle = isInputEnabled ? "text-gray-800" : "";
  const combinedStyles = `${useColorByMode(
    "text-gray-100",
    "text-gray-800"
  )} ${enabledStyle}`;

  return (
    <form>
      <div className="settings-input-fields flex flex-col mb-4">
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
          value={profileData?.fistName || ""}
          onChange={handleFieldChange}
          className={`${combinedStyles} rounded-lg px-4 py-2`}
          disabled={!isInputEnabled}
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
          value={profileData?.lastName || ""}
          onChange={handleFieldChange}
          className={`${combinedStyles} rounded-lg px-4 py-2`}
          disabled={!isInputEnabled}
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
          value={profileData?.age || ""}
          onChange={handleFieldChange}
          className={`${combinedStyles} rounded-lg px-4 py-2`}
          disabled={!isInputEnabled}
        />
      </div>
    </form>
  );
};

export default FormFields;
