import { ReactComponent as AddIcon } from "../../../../assets/icons/button-add.svg";
import useColorByMode from "../../../../hooks/useColorByMode";

interface IAddNewInvestmentCardBtn {
  onAddClick: () => void;
}

const AddNewInvestmentCardBtn = ({ onAddClick }: IAddNewInvestmentCardBtn) => {
  return (
    <div
      className={` ${useColorByMode(
        "bg-gray-800",
        "bg-gray-100"
      )} card-button p-8 w-88 h-96 flex-shrink-0 flex flex-col justify-center items-center relative rounded-lg`}
      onClick={onAddClick}
    >
      <button className="focus:outline-none">
        <AddIcon
          style={{ borderRadius: "50%" }}
          className={`${useColorByMode("bg-gray-800", "bg-gray-100")}`}
        />
      </button>
    </div>
  );
};

export default AddNewInvestmentCardBtn;
