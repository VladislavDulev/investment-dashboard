import React from "react";
import buttonAdd from "../../../assets/icons/button-add.jpg";

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
        <img src={buttonAdd} alt="Button Add" />
      </button>
    </div>
  );
};

export default AddNewInvestmentCardBtn;
