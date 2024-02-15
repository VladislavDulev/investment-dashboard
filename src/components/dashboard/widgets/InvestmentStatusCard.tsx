import { ReactComponent as InvestmentIcon } from "../../../assets/icons/icon-invested.svg";
import { ReactComponent as ActiveIcon } from "../../../assets/icons/icon-active.svg";
import { ReactComponent as ClosedIcon } from "../../../assets/icons/icon-closed.svg";
import { CardStatusTypes } from "../../../types/cardStatusTypes";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";

// //TODO: Possible other ways to import the icon by using a component or something.

interface IInvestmentStatusCard {
  cardType: CardStatusTypes;
  title: string;
}

const InvestmentStatusCard = ({ cardType, title }: IInvestmentStatusCard) => {
  const activeCardCount = useSelector(
    (state: RootState) => state.dashboard.activeCardCount
  );
  const closedCardCount = useSelector(
    (state: RootState) => state.dashboard.closedCardCount
  );

  // //TODO: Case for the investment card when add value to the store for it

  const renderContent = (cardType: CardStatusTypes, showIcon: boolean) => {
    let content = null;

    switch (cardType) {
      case CardStatusTypes.INVESTED:
        content = showIcon ? (
          <InvestmentIcon className="mr-2 mb-2 ml-2 mt-2" />
        ) : (
          "1000"
        );
        break;
      case CardStatusTypes.ACTIVE:
        content = showIcon ? (
          <ActiveIcon className="mr-2 mb-2 ml-2 mt-2" />
        ) : (
          activeCardCount
        );
        break;
      case CardStatusTypes.CLOSED:
        content = showIcon ? (
          <ClosedIcon className="mr-2 mb-2 ml-2 mt-2" />
        ) : (
          closedCardCount
        );
        break;
      default:
        break;
    }

    return content;
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 shadow-md w-88 h-48 flex-shrink-0 flex flex-col justify-end relative">
      <div className="absolute top-0 right-0">
        {renderContent(cardType, true)}
      </div>
      <div className="text-gray-600 font-red-hat-display text-base font-normal">
        {title}
      </div>
      <div className="text-white font-red-hat-display text-5xl font-normal mt-2">
        {renderContent(cardType, false)}
      </div>
    </div>
  );
};

export default InvestmentStatusCard;
