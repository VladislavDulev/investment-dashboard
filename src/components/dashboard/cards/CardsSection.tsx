import React, { useEffect, useRef, useState } from "react";
import { cards } from "../../../data/cards";
import { CardStatusTypes } from "../../../types/cardStatusTypes";
import InvestmentManagementCard from "./InvestmentManagementCard";
import { useDispatch } from "react-redux";
import {
  addCard,
  initCards,
  setActiveCardCount,
  setCanceledCardCount,
  setTotalCardValue,
  toggleCardStatus,
} from "../../../actions/dashboardActions";
import { InvestmentTypes } from "../../../types/investmentTypes";
import { InvestmentNamesTypes } from "../../../types/InvestmentNamesTypes";
import { InvestmentListingsTypes } from "../../../types/investmentListingsTypes";
import { ICard } from "../../interfaces/card";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";

//TODO: Maybe renaming is needed
const CardsSection = () => {
  const dispatch = useDispatch();

  const cardsData = useSelector(
    (state: RootState) => state.dashboard.cardsData
  );
  const highestIdRef = useRef(Math.max(...cardsData.map((card) => card.id)));

  //TODO: Potentially customHook could be created.
  const getCountByStatus = (cards: any[], status: CardStatusTypes): number => {
    return cards.filter((card) => card.status === status).length;
  };

  //TODO: See how to merge or improve
  useEffect(() => {
    dispatch(initCards(cards));
  }, []);

  useEffect(() => {
    const activeCount = getCountByStatus(cardsData, CardStatusTypes.ACTIVE);
    const closedCount = getCountByStatus(cardsData, CardStatusTypes.CLOSED);
    const totalValue = cardsData.reduce((total, card) => total + card.value, 0);

    dispatch(setActiveCardCount(activeCount));
    dispatch(setCanceledCardCount(closedCount));
    dispatch(setTotalCardValue(totalValue));
  }, [cardsData, dispatch]);

  const handleToggle = (id: number) => {
    const newStatus =
      cardsData.find((card) => card.id === id)?.status ===
      CardStatusTypes.ACTIVE
        ? CardStatusTypes.CLOSED
        : CardStatusTypes.ACTIVE;
    dispatch(toggleCardStatus(id, newStatus));
  };

  const handleAddCard = () => {
    highestIdRef.current += 1;
    const newCard = {
      id: highestIdRef.current,
      status: CardStatusTypes.ACTIVE,
      investmentType: InvestmentTypes.COMMODITIES,
      investmentName: InvestmentNamesTypes.TESLA,
      investmentListing: InvestmentListingsTypes.TSLA,
      value: 200,
      date: "15 February",
    };

    dispatch(addCard(newCard));
  };

  return (
    <div className="cards">
      <button onClick={handleAddCard}>Add Card</button>
      {cardsData.map((card: ICard) => (
        <InvestmentManagementCard
          key={card.id}
          investmentType={card.investmentType}
          investmentName={card.investmentName}
          investmentListing={card.investmentListing}
          value={card.value}
          date={card.date}
          status={card.status}
          onToggle={() => handleToggle(card.id)}
        />
      ))}
    </div>
  );
};

export default CardsSection;
