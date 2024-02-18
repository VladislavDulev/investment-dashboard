import { combineReducers } from "redux";
import sidebarReducer from "./sidebarReducer";
import dashboardReducer from "./dashboardReducer";
import settingsReducer from "./settingsReducer";

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  dashboard: dashboardReducer,
  settings: settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
