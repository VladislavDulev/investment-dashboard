import { combineReducers } from "redux";
import sidebarReducer from "./sidebarReducer";
import dashboardReducer from "./dashboardReducer";

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  dashboard: dashboardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
