import { InvestmentNamesTypes } from "../types/InvestmentNamesTypes";
import LogoTesla from "../assets/icons/logo-tesla.png";
import LogoApple from "../assets/icons/logo-apple.png";
import LogoBitcoin from "../assets/icons/logo-bitcoin.png";
import LogoGold from "../assets/icons/logo-gold.png";
import LogoNetflix from "../assets/icons/logo-netflix.png";
import LogoDisney from "../assets/icons/logo-disney.png";

export const getIconSource = (investmentName: InvestmentNamesTypes) => {
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
