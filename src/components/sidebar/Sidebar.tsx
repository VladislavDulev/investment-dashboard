import { useState } from "react";
import SingleSidebarOption from "./sidebarComponents/SingleSidebarOption";
import { LuLayoutDashboard } from "react-icons/lu";
import { LuBuilding2 } from "react-icons/lu";
import { IoIosContacts } from "react-icons/io";
import { CiFileOn } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";

//TODO: Check naming and structure of the components for the sidebar.

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="flex h-screen bg-gray-200">
      <div
        className="bg-gray-800 transition-width duration-300"
        style={{ width: collapsed ? "4rem" : "16rem" }}
      >
        <div
          className="cursor-pointer flex items-center justify-center py-4"
          onClick={toggleSidebar}
        >
          <FiMenu className="text-white text-2xl" />
        </div>

        {!collapsed && (
          <>
            <SingleSidebarOption
              icon={<LuLayoutDashboard />}
              optionName="Investments"
            />
            <SingleSidebarOption
              icon={<LuBuilding2 />}
              optionName="Properties"
            />
            <SingleSidebarOption
              icon={<IoIosContacts />}
              optionName="Contacts"
            />
            <SingleSidebarOption icon={<CiFileOn />} optionName="Lists" />
            <SingleSidebarOption icon={<IoIosContact />} optionName="Clients" />
            <SingleSidebarOption icon={<CiSettings />} optionName="Settings" />
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
