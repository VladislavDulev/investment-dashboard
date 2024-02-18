import { ActionTypes } from "../types/actionTypes";

interface SidebarState {
  collapsed: boolean;
  isDarkMode: boolean;
}

const initialState: SidebarState = {
  collapsed: false,
  isDarkMode: false,
};

type SidebarAction =
  | { type: ActionTypes.TOGGLE_SIDEBAR }
  | { type: ActionTypes.TOGGLE_THEME };

const sidebarReducer = (
  state = initialState,
  action: SidebarAction
): SidebarState => {
  switch (action.type) {
    case ActionTypes.TOGGLE_SIDEBAR:
      return {
        ...state,
        collapsed: !state.collapsed,
      };
    case ActionTypes.TOGGLE_THEME:
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    default:
      return state;
  }
};

export default sidebarReducer;
