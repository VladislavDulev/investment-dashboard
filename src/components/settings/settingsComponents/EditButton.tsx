import React from "react";

interface IEditButton {
  isEditModeActive: boolean;
  handleButtonClick: () => void;
}

const EditButton = ({ isEditModeActive, handleButtonClick }: IEditButton) => {
  return (
    <div className="flex flex-col mb-4">
      <button
        onClick={handleButtonClick}
        className="rounded-lg px-4 py-2 text-white bg-pink font-red-hat-display text-base font-normal"
      >
        {isEditModeActive ? "Save" : "Edit "}
      </button>
    </div>
  );
};

export default EditButton;
