import Toggle from "react-toggle";
import "react-toggle/style.css";
import { CardStatusTypes } from "../../../types/cardStatusTypes";

const Card = ({ investmentName, status, onToggle }: any) => {
  return (
    <div
      className={`bg-blue-200 p-4 rounded-lg shadow-md mb-4 ${
        status === CardStatusTypes.DISABLED ? "bg-gray-400" : ""
      }`}
    >
      <h2>{investmentName}</h2>
      <Toggle checked={status === CardStatusTypes.ACTIVE} onChange={onToggle} />
    </div>
  );
};

export default Card;
