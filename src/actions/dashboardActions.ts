import { ActionTypes } from "../types/actionTypes";

export const setActiveCardCount = (count: number) => {
  return {
    type: ActionTypes.SET_ACTIVE_CARD_COUNT,
    payload: count,
  };
};

export const setCanceledCardCount = (count: number) => {
  return {
    type: ActionTypes.SET_CANCELED_CARD_COUNT,
    payload: count,
  };
};

export const setTotalCardValue = (value: number) => ({
  type: ActionTypes.SET_TOTAL_CARD_VALUE,
  payload: value,
});
