import { useEffect, useRef, useState } from "react";
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
import { ICard } from "../../interfaces/card";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import ModalForm from "./ModalForm";
import AddNewInvestmentCardBtn from "./AddNewInvestmentCardBtn";

//TODO: Maybe renaming is needed
const CardsSection = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardsData = useSelector(
    (state: RootState) => state.dashboard.cardsData
  );
  const highestIdRef = useRef(Math.max(...cardsData.map((card) => card.id)));

  const handleAddModalOpen = () => {
    setIsModalOpen(true);
  };

  //TODO: Potentially customHook could be created.
  const getCountByStatus = (cards: any[], status: CardStatusTypes): number => {
    return cards.filter((card) => card.status === status).length;
  };

  const activeCount = getCountByStatus(cardsData, CardStatusTypes.ACTIVE);
  const closedCount = getCountByStatus(cardsData, CardStatusTypes.CLOSED);
  const totalValue = cardsData.reduce((total, card) => total + card.value, 0);

  //TODO: See how to merge or improve
  useEffect(() => {
    dispatch(initCards(cards));
  }, [dispatch]);

  useEffect(() => {
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
    highestIdRef.current += 1;
    const newCard = {
      id: highestIdRef.current,
      ...formData,
    };
    dispatch(addCard(newCard));
  };

  return (
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
  );
};

export default CardsSection;
