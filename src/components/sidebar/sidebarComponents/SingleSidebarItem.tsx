import React from "react";

interface ISingleSidebarItem {
  icon: React.ReactNode;
  optionName: string;
}

const SingleSidebarItem = ({ icon, optionName }: ISingleSidebarItem) => {
  return (
    <div className="flex items-center text-white cursor-pointer py-2 px-4 hover:bg-gray-700">
      <div className="mr-2">{icon}</div>
      <span>{optionName}</span>
    </div>
  );
};

export default SingleSidebarItem;
