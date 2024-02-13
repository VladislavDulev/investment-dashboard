import { ActionTypes } from "../types/actionTypes";

interface SidebarState {
  collapsed: boolean;
}

const initialState: SidebarState = {
  collapsed: false,
};

type SidebarAction = { type: ActionTypes.TOGGLE_SIDEBAR };

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
    default:
      return state;
  }
};

export default sidebarReducer;
