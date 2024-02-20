/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { cards } from "../../../../data/cards";
import { CardStatusTypes } from "../../../../types/cardStatusTypes";
import InvestmentManagementCard from "./InvestmentManagementCard";
import { useDispatch } from "react-redux";
import {
  addCard,
  initCards,
  setActiveCardCount,
  setCanceledCardCount,
  setTotalCardValue,
  toggleCardStatus,
} from "../../../../actions/dashboardActions";
import { ICard } from "../../../interfaces/card";
import { useSelector } from "react-redux";
import { RootState } from "../../../../reducers";
import ModalForm from "./ModalForm";
import AddNewInvestmentCardBtn from "./AddNewInvestmentCardBtn";
import useHighestId from "../../../../hooks/useHighestId";
import useColorByMode from "../../../../hooks/useColorByMode";

const CardsSection = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardsData = useSelector(
    (state: RootState) => state.dashboard.cardsData
  );

  let highestId = useHighestId(cardsData);

  const handleAddModalOpen = () => {
    setIsModalOpen(true);
  };

  const getCountByStatus = (
    cards: ICard[],
    status: CardStatusTypes
  ): number => {
    return cards.filter((card) => card.status === status).length;
  };

  useEffect(() => {
    dispatch(initCards(cards));
  }, [dispatch]);

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

  const handleAddCard = (formData: any) => {
    highestId += 1;
    const newCard = {
      ...formData,
      id: highestId,
    };

    dispatch(addCard(newCard));
  };

  return (
    <>
      <h2
        className={`${useColorByMode(
          "text-gray-100",
          "text-gray-800"
        )} section-title text-2B2B38 font-red-hat-display font-medium text-2xl pl-10`}
      >
        Investment management
      </h2>

      <div className="cards grid grid-cols-3 gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 m-10">
        <AddNewInvestmentCardBtn onAddClick={handleAddModalOpen} />
        <ModalForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddCard}
        />
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
    </>
  );
};

export default CardsSection;
