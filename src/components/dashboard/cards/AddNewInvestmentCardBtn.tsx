import React from "react";

import { ReactComponent as AddIcon } from "../../../assets/icons/button-add.svg";

interface IAddNewInvestmentCardBtn {
  onAddClick: () => void;
}

const AddNewInvestmentCardBtn = ({ onAddClick }: IAddNewInvestmentCardBtn) => {
  return (
    <div
      className="card-button p-8 shadow-md w-88 h-96 flex-shrink-0 flex flex-col justify-center items-center relative bg-gray-800 rounded-lg"
      onClick={onAddClick}
    >
      <button className="focus:outline-none">
        <AddIcon style={{ borderRadius: "50%" }} />
      </button>
    </div>
  );
};

export default AddNewInvestmentCardBtn;
