import Toggle from "react-toggle";
import "react-toggle/style.css";
import { CardStatusTypes } from "../../../types/cardStatusTypes";
import { InvestmentNamesTypes } from "../../../types/InvestmentNamesTypes";
import { InvestmentTypes } from "../../../types/investmentTypes";
import { InvestmentListingsTypes } from "../../../types/investmentListingsTypes";
import LogoTesla from "../../../assets/icons/logo-tesla.jpg";
import LogoApple from "../../../assets/icons/logo-apple.jpg";
import LogoBitcoin from "../../../assets/icons/logo-bitcoin.jpg";
import LogoGold from "../../../assets/icons/logo-gold.jpg";
import LogoNetflix from "../../../assets/icons/logo-netflix.jpg";
import LogoDisney from "../../../assets/icons/logo-disney.jpg";

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
  const getIconSource = (investmentName: InvestmentNamesTypes) => {
    switch (investmentName) {
      case InvestmentNamesTypes.TESLA:
        return LogoTesla;
      case InvestmentNamesTypes.NETFLIX:
        return LogoNetflix;
      case InvestmentNamesTypes.APPLE:
        return LogoApple;
      case InvestmentNamesTypes.GOLD:
        return LogoGold;
      case InvestmentNamesTypes.BITCOIN:
        return LogoBitcoin;
      case InvestmentNamesTypes.DISNEY:
        return LogoDisney;
      default:
        return null;
    }
  };

  const InvestmentManagementCard = (investmentName: InvestmentNamesTypes) => {
    const iconSrc = getIconSource(investmentName);
    return (
      <div className="card">
        {iconSrc && <img src={iconSrc} alt={`${investmentName} Logo`} />}
      </div>
    );
  };

  return (
    <div
      className={`bg-gray-800 rounded-lg p-4 shadow-md w-88 h-96 flex-shrink-0 flex flex-col justify-end relative mb-4  ${
        status === CardStatusTypes.CLOSED ? "bg-gray-200" : ""
      }`}
    >
      {/* Toggle */}
      <div className="absolute top-0 left-0 flex-shrink-0">
        <Toggle
          checked={status === CardStatusTypes.ACTIVE}
          onChange={onToggle}
          className="m-2"
        />
      </div>
      {/* Date */}
      <div className="absolute top-0 right-0 text-gray-600 font-red-hat-display text-base font-normal m-2">
        {date}
      </div>
      {/* Stocks */}
      <div className="text-gray-600 font-red-hat-display text-base font-normal">
        {investmentType}
      </div>
      {/* Amount */}
      <div className="text-white font-red-hat-display text-5xl font-normal mt-2">
        {value}
      </div>
      {/* Line */}
      <div className="w-295.007px h-1 bg-gray-300 mt-2"></div>
      {/* Icon and texts */}
      <div className="text-white font-red-hat-display text-5xl font-normal mt-2 grid grid-cols-55-auto grid-rows-auto-auto">
        {/* Wrap the icon and text in one div */}
        <div className="flex items-center">
          {InvestmentManagementCard(investmentName)}
          <div>
            <span className="text-gray-600 font-red-hat-display text-base font-normal text-white font-red-hat-display text-base font-normal">
              {investmentName}
            </span>
            <span> | </span>
            <span className="text-gray-600 font-red-hat-display text-base font-normal">
              {investmentListing}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentManagementCard;

//   return (
//     <div
//       className={`bg-blue-200 p-4 rounded-lg shadow-md mb-4 ${
//         status === CardStatusTypes.CLOSED ? "bg-gray-400" : ""
//       }`}
//     >
//       <h2>{investmentName}</h2>
//       <Toggle checked={status === CardStatusTypes.ACTIVE} onChange={onToggle} />
//     </div>
//   );
// };

// export default InvestmentManagementCard;
