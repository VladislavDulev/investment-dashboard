import { ICard } from "../interfaces/card";
import { ActionTypes } from "../types/actionTypes";
import { CardStatusTypes } from "../types/cardStatusTypes";

interface DashboardState {
  activeCardCount: number;
  closedCardCount: number;
  totalCardValue: number;
  cardsData: ICard[];
}

const initialState: DashboardState = {
  activeCardCount: 0,
  closedCardCount: 0,
  totalCardValue: 0,
  cardsData: [],
};

type DashboardAction =
  | { type: ActionTypes.SET_ACTIVE_CARD_COUNT; payload: number }
  | { type: ActionTypes.SET_CANCELED_CARD_COUNT; payload: number }
  | { type: ActionTypes.SET_TOTAL_CARD_VALUE; payload: number }
  | { type: ActionTypes.INIT_CARDS; payload: ICard[] }
  | { type: ActionTypes.ADD_CARD; payload: ICard }
  | {
      type: ActionTypes.TOGGLE_CARD_STATUS;
      payload: { id: number; newStatus: CardStatusTypes };
    };

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
    case ActionTypes.INIT_CARDS:
      return {
        ...state,
        cardsData: action.payload,
      };
    case ActionTypes.ADD_CARD:
      return {
        ...state,
        cardsData: [...state.cardsData, action.payload],
      };
    case ActionTypes.TOGGLE_CARD_STATUS:
      return {
        ...state,
        cardsData: state.cardsData.map((card) =>
          card.id === action.payload.id
            ? { ...card, status: action.payload.newStatus }
            : card
        ),
      };
    default:
      return state;
  }
};

export default dashboardReducer;
