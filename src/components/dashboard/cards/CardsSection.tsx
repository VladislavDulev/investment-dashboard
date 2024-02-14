import React, { useState } from "react";
import { cards } from "../../../data/cards";
import { CardStatusTypes } from "../../../types/cardStatusTypes";
import InvestmentManagementCard from "./InvestmentManagementCard";

//TODO: Maybe renaming is needed
const CardsSection = () => {
  const [cardsData, setCardsData] = useState(cards);

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

  // useEffect(() => {
  //   console.log(
  //     "First card status:",
  //     cardsData.length > 0 ? cardsData[0].status : null
  //   );
  // }, [cardsData]);
  return (
    <div className="cards">
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
