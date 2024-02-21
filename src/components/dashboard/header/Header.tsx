import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import ProfilePicture from "../../../assets/icons/profile-picture.png";
import useColorByMode from "../../../hooks/useColorByMode";
import { Link } from "react-router-dom";

const Header = () => {
  const profile = useSelector((state: RootState) => state.settings.data);

  const greeting = `👋 Welcome ${profile?.fistName}!`;

  return (
    <h1
      className={`header font-red-hat-display text-4xl font-normal p-8 flex justify-between items-center`}
    >
      <div className={`${useColorByMode("text-gray-100", "text-gray-800")}`}>
        {greeting}
      </div>
      <Link to="/settings">
        <img src={ProfilePicture} alt="Avatar" className="w-12" />
      </Link>
    </h1>
  );
};

export default Header;
