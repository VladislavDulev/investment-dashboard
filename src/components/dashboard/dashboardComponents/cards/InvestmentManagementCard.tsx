import Toggle from "react-toggle";
import "react-toggle/style.css";
import { CardStatusTypes } from "../../../../types/cardStatusTypes";
import { InvestmentNamesTypes } from "../../../../types/InvestmentNamesTypes";
import { InvestmentTypes } from "../../../../types/investmentTypes";
import { InvestmentListingsTypes } from "../../../../types/investmentListingsTypes";
import useColorByMode from "../../../../hooks/useColorByMode";
import { getIconSource } from "../../../../utils/utils";

interface IInvestmentManagementCard {
  status: CardStatusTypes;
  investmentType: InvestmentTypes;
  investmentName: InvestmentNamesTypes;
  investmentListing: InvestmentListingsTypes;
  value: number;
  date: string;
  onToggle: () => void;
}

const InvestmentManagementCard = ({
  status,
  investmentType,
  investmentName,
  investmentListing,
  value,
  date,
  onToggle,
}: IInvestmentManagementCard) => {
  const InvestmentManagementCard = (investmentName: InvestmentNamesTypes) => {
    const iconSrc = getIconSource(investmentName);
    return (
      <div>
        {iconSrc && (
          <img src={iconSrc} alt={`${investmentName} Logo`} className="w-12" />
        )}
      </div>
    );
  };

  return (
    <div
      style={
        status === CardStatusTypes.CLOSED ? { opacity: 0.4 } : { opacity: 1 }
      }
      className={`investment-management-card  ${useColorByMode(
        "bg-gray-800",
        "bg-gray-100"
      )} rounded-lg p-8 w-88 h-96 flex-shrink-0 flex flex-col justify-end relative  `}
    >
      {/* Toggle */}
      <div className="absolute top-0 left-0 flex-shrink-0">
        <Toggle
          checked={status === CardStatusTypes.ACTIVE}
          onChange={onToggle}
          className="m-8"
          icons={false}
        />
      </div>
      {/* Date */}
      <div className="absolute top-0 right-0 text-gray-600 font-red-hat-display text-base font-normal m-8 ">
        {date}
      </div>
      {/* Stocks */}
      <div className="text-gray-600 font-red-hat-display text-base font-normal">
        {investmentType}
      </div>
      {/* Amount */}
      <div
        className={`${useColorByMode(
          "text-gray-100",
          "text-gray-600"
        )} font-red-hat-display text-5xl font-normal mb-20`}
      >
        {`${value}$`}
      </div>
      {/* Line */}
      <div className="h-0.5 bg-gray-600 mt-2"></div>
      {/* Icon and texts */}
      <div className="text-white font-red-hat-display text-5xl font-normal mt-2 grid grid-cols-55-auto grid-rows-auto-auto">
        <div className="flex items-center pt-4">
          {InvestmentManagementCard(investmentName)}
          <div className="pl-4">
            <span
              className={`${useColorByMode(
                "text-gray-100",
                "text-gray-800"
              )} font-red-hat-display  font-red-hat-display text-base font-normal block`}
            >
              {investmentName}
            </span>

            <span className="text-gray-600 font-red-hat-display text-base font-normal block">
              {investmentListing}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentManagementCard;
