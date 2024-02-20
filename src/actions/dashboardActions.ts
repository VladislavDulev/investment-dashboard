import { ICard } from "../interfaces/card";
import { ActionTypes } from "../types/actionTypes";
import { CardStatusTypes } from "../types/cardStatusTypes";

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

export const initCards = (cards: ICard[]) => ({
  type: ActionTypes.INIT_CARDS,
  payload: cards,
});

export const addCard = (card: ICard) => ({
  type: ActionTypes.ADD_CARD,
  payload: card,
});

export const toggleCardStatus = (id: number, newStatus: CardStatusTypes) => {
  return {
    type: ActionTypes.TOGGLE_CARD_STATUS,
    payload: { id, newStatus },
  };
};
