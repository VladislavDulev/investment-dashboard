import { useState } from "react";
import Avatar from "./settingsComponents/Avatar";
import FormFields from "./settingsComponents/FormFields";
import EditButton from "./settingsComponents/EditButton";

const Settings = () => {
  const [isEditModeActive, setIsEditModeActive] = useState(false);

  const handleButtonClick = () => {
    setIsEditModeActive(!isEditModeActive);
  };

  return (
    <div className="settings w-full flex flex-col items-center justify-center h-screen">
      <div className="w-500">
        <Avatar />
        <FormFields isInputEnabled={isEditModeActive} />
        <EditButton
          isEditModeActive={isEditModeActive}
          handleButtonClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export default Settings;
