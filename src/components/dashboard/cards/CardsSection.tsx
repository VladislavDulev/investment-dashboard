import React, { useEffect, useRef, useState } from "react";
import { cards } from "../../../data/cards";
import { CardStatusTypes } from "../../../types/cardStatusTypes";
import InvestmentManagementCard from "./InvestmentManagementCard";
import { useDispatch } from "react-redux";
import {
  setActiveCardCount,
  setCanceledCardCount,
  setTotalCardValue,
} from "../../../actions/dashboardActions";

//TODO: Maybe renaming is needed
const CardsSection = () => {
  const dispatch = useDispatch();
  const [cardsData, setCardsData] = useState(cards);
  const highestIdRef = useRef(Math.max(...cardsData.map((card) => card.id)));

  //TODO: Potentially customHook could be created.
  const getCountByStatus = (cards: any[], status: CardStatusTypes): number => {
    return cards.filter((card) => card.status === status).length;
  };

  useEffect(() => {
    const activeCount = getCountByStatus(cardsData, CardStatusTypes.ACTIVE);
    const closedCount = getCountByStatus(cardsData, CardStatusTypes.CLOSED);
    const totalValue = cardsData.reduce((total, card) => total + card.value, 0);

    dispatch(setActiveCardCount(activeCount));
    dispatch(setCanceledCardCount(closedCount));
    dispatch(setTotalCardValue(totalValue));
  }, [cardsData, dispatch]);

  const handleToggle = (id: number) => {
    setCardsData((prevCards) =>
      prevCards.map((card) =>
        card.id === id
          ? {
              ...card,
              status:
                card.status === CardStatusTypes.ACTIVE
                  ? CardStatusTypes.CLOSED
                  : CardStatusTypes.ACTIVE,
            }
          : card
      )
    );
  };

  const handleAddCard = () => {
    highestIdRef.current += 1;
    const newCard = {
      id: highestIdRef.current,
      status: "active",
      investmentType: "Commodities",
      investmentName: "Test",
      investmentListing: "Test",
      value: 200,
      date: "15 February",
    };
    setCardsData((prevCards) => [...prevCards, newCard]);
  };

  return (
    <div className="cards">
      <button onClick={handleAddCard}>Add Card</button>
      {cardsData.map((card) => (
        <InvestmentManagementCard
          key={card.id}
          investmentName={card.investmentName}
          status={card.status}
          onToggle={() => handleToggle(card.id)}
        />
      ))}
    </div>
  );
};

export default CardsSection;
