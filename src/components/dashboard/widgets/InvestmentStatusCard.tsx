import { ReactComponent as InvestmentIcon } from "../../../assets/icons/icon-invested.svg";
import { ReactComponent as ActiveIcon } from "../../../assets/icons/icon-active.svg";
import { ReactComponent as ClosedIcon } from "../../../assets/icons/icon-closed.svg";
import { CardStatusTypes } from "../../../types/cardStatusTypes";

// //TODO: see for another ways to import the icon by using a component or something.

interface IInvestmentStatusCard {
  cardType: CardStatusTypes;
  title: string;
  value: string;
}

const InvestmentStatusCard = ({
  cardType,
  title,
  value,
}: IInvestmentStatusCard) => {
  const renderIcon = (cardType: CardStatusTypes) => {
    switch (cardType) {
      case CardStatusTypes.INVESTED:
        return <InvestmentIcon className="mr-2 mb-2 ml-2 mt-2" />;
      case CardStatusTypes.ACTIVE:
        return <ActiveIcon className="mr-2 mb-2 ml-2 mt-2" />;
      case CardStatusTypes.CLOSED:
        return <ClosedIcon className="mr-2 mb-2 ml-2 mt-2" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 shadow-md w-88 h-48 flex-shrink-0 flex flex-col justify-end relative">
      <div className="absolute top-0 right-0">{renderIcon(cardType)}</div>
      <div className="text-gray-600 font-red-hat-display text-base font-normal">
        {title}
      </div>
      <div className="text-white font-red-hat-display text-5xl font-normal mt-2">
        {value}
      </div>
    </div>
  );
};

export default InvestmentStatusCard;
