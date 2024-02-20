import useColorByMode from "../../../hooks/useColorByMode";
import ProfilePicture from "../../../assets/icons/profile-picture.png";

const Avatar = () => {
  return (
    <>
      <img src={ProfilePicture} alt="Avatar" className="w-60" />
      <h2
        className={`${useColorByMode(
          "text-gray-100",
          "text-gray-800"
        )} font-red-hat-display text-4xl font-normal p-8`}
      >
        Edit Profile
      </h2>
    </>
  );
};

export default Avatar;
