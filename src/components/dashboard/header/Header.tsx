import ProfilePicture from "../../../assets/icons/profile-picture.png";
import useColorByMode from "../../../hooks/useColorByMode";
import { Link } from "react-router-dom";
import { useProfileData } from "../../../hooks/useProfileData";

const Header = () => {
  const profileData = useProfileData();

  const colorStyle = useColorByMode("text-gray-100", "text-gray-800");

  if (!profileData) {
    return (
      <h1
        className={`header font-red-hat-display text-4xl font-normal p-8 flex justify-between items-center`}
      >
        Loading...
      </h1>
    );
  }

  const greeting = `👋 Welcome ${profileData?.fistName}!`;

  return (
    <h1
      className={`header font-red-hat-display text-4xl font-normal p-8 flex justify-between items-center`}
    >
      <div className={colorStyle}>{greeting}</div>
      <Link to="/settings">
        <img src={ProfilePicture} alt="Avatar" className="w-12" />
      </Link>
    </h1>
  );
};

export default Header;
