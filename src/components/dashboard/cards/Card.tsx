import Toggle from "react-toggle";
import "react-toggle/style.css";

const Card = ({ title, status, onToggle }: any) => {
  return (
    <div
      className={`bg-blue-200 p-4 rounded-lg shadow-md mb-4 ${
        status === "disabled" ? "bg-gray-400" : ""
      }`}
    >
      <h2>{title}</h2>
      <Toggle checked={status === "active"} onChange={onToggle} />
    </div>
  );
};

export default Card;
