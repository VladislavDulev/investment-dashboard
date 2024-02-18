import { useSelector, useDispatch } from "react-redux";
import SingleSidebarOption from "./sidebarComponents/SingleSidebarOption";
import { LuLayoutDashboard } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { toggleSidebar } from "../../actions/sidebarActions";
import { RootState } from "../../reducers/index";
import { Link } from "react-router-dom";
import { ReactComponent as AppLogo } from "../../assets/icons/logo-app.svg";
import SidebarToggle from "./sidebarComponents/SidebarToggle";
import { getColorByMode } from "../../utils/utils";

const Sidebar = () => {
  const collapsed = useSelector((state: RootState) => state.sidebar.collapsed);
  const dispatch = useDispatch();

  const toggleSidebarHandler = () => {
    dispatch(toggleSidebar());
  };

  const isDarkMode = useSelector(
    (state: RootState) => state.sidebar.isDarkMode
  );

  return (
    <div className="sidebar flex h-100">
      <div
        className={`${getColorByMode(
          isDarkMode,
          "bg-gray-800",
          "bg-gray-600"
        )} transition-width duration-300`}
        style={{ width: collapsed ? "4rem" : "16rem" }}
      >
        <div className="cursor-pointer flex items-center justify-between py-4">
          {!collapsed && <AppLogo className="text-white ml-4" />}

          <FiMenu
            className={`text-white text-2xl ${collapsed ? "mx-auto" : "mr-4"}`}
            onClick={toggleSidebarHandler}
          />
        </div>

        {!collapsed && (
          <>
            <Link to="/investments" className="text-white">
              <SingleSidebarOption
                icon={<LuLayoutDashboard />}
                optionName="Investments"
              />
            </Link>

            <Link to="/settings" className="text-white">
              <SingleSidebarOption
                icon={<CiSettings />}
                optionName="Settings"
              />
            </Link>
          </>
        )}
        <div className="sidebar-toggle flex items-center justify-center mt-20">
          <SidebarToggle />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
