import { combineReducers } from "redux";
import sidebarReducer from "./sidebarReducer";

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
