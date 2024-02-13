import { useSelector, useDispatch } from "react-redux";
import SingleSidebarOption from "./sidebarComponents/SingleSidebarOption";
import { LuLayoutDashboard } from "react-icons/lu";
import { LuBuilding2 } from "react-icons/lu";
import { IoIosContacts } from "react-icons/io";
import { CiFileOn } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { toggleSidebar } from "../../actions/sidebarActions";
import { RootState } from "../../reducers/index";

const Sidebar = () => {
  const collapsed = useSelector((state: RootState) => state.sidebar.collapsed);
  const dispatch = useDispatch();

  const toggleSidebarHandler = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="flex h-screen bg-gray-200">
      <div
        className="bg-gray-800 transition-width duration-300"
        style={{ width: collapsed ? "4rem" : "16rem" }}
      >
        <div
          className="cursor-pointer flex items-center justify-center py-4"
          onClick={toggleSidebarHandler}
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
