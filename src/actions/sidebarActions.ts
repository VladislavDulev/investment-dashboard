import { ActionTypes } from "../types/actionTypes";

export const toggleSidebar = () => {
  return {
    type: ActionTypes.TOGGLE_SIDEBAR,
  };
};

export const toggleTheme = () => ({
  type: "TOGGLE_THEME",
});
