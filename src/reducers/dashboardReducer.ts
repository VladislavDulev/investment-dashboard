import { ActionTypes } from "../types/actionTypes";

interface DashboardState {
  activeCardCount: number;
  closedCardCount: number;
  totalCardValue: number;
}

const initialState: DashboardState = {
  activeCardCount: 0,
  closedCardCount: 0,
  totalCardValue: 0,
};

type DashboardAction =
  | { type: ActionTypes.SET_ACTIVE_CARD_COUNT; payload: number }
  | { type: ActionTypes.SET_CANCELED_CARD_COUNT; payload: number }
  | { type: ActionTypes.SET_TOTAL_CARD_VALUE; payload: number };

const dashboardReducer = (
  state = initialState,
  action: DashboardAction
): DashboardState => {
  switch (action.type) {
    case ActionTypes.SET_ACTIVE_CARD_COUNT:
      return {
        ...state,
        activeCardCount: action.payload,
      };
    case ActionTypes.SET_CANCELED_CARD_COUNT:
      return {
        ...state,
        closedCardCount: action.payload,
      };
    case ActionTypes.SET_TOTAL_CARD_VALUE:
      return {
        ...state,
        totalCardValue: action.payload,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
