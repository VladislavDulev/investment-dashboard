import React from "react";

//TODO: See for better names.
//TODO: Enum for the options

interface ISingleSidebarOption {
  icon: React.ReactNode;
  optionName: string;
}

const SingleSidebarOption = ({ icon, optionName }: ISingleSidebarOption) => {
  return (
    <div className="flex items-center text-white cursor-pointer py-2 px-4 hover:bg-gray-700">
      <div className="mr-2">{icon}</div>
      <span>{optionName}</span>
    </div>
  );
};

export default SingleSidebarOption;
