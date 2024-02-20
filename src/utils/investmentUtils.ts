import { InvestmentNamesTypes } from "../types/InvestmentNamesTypes";
import { InvestmentListingsTypes } from "../types/investmentListingsTypes";
import { InvestmentTypes } from "../types/investmentTypes";

export const handleInvestmentTypeChange = (
  selectedInvestmentName: string,
  setFieldValue: Function
) => {
  let type;
  let listing;

  switch (selectedInvestmentName) {
    case InvestmentNamesTypes.APPLE:
    case InvestmentNamesTypes.NETFLIX:
    case InvestmentNamesTypes.DISNEY:
    case InvestmentNamesTypes.TESLA:
      type = InvestmentTypes.STOCKS;
      break;
    case InvestmentNamesTypes.BITCOIN:
      type = InvestmentTypes.CRYPTO;
      break;
    case InvestmentNamesTypes.GOLD:
      type = InvestmentTypes.COMMODITIES;
      break;
  }

  switch (selectedInvestmentName) {
    case InvestmentNamesTypes.NETFLIX:
      listing = InvestmentListingsTypes.NTFLX;
      break;
    case InvestmentNamesTypes.APPLE:
      listing = InvestmentListingsTypes.AAPL;
      break;
    case InvestmentNamesTypes.BITCOIN:
      listing = InvestmentListingsTypes.BTC;
      break;
    case InvestmentNamesTypes.DISNEY:
      listing = InvestmentListingsTypes.DIS;
      break;
    case InvestmentNamesTypes.GOLD:
      listing = InvestmentListingsTypes.AU;
      break;
    case InvestmentNamesTypes.TESLA:
      listing = InvestmentListingsTypes.TSLA;
      break;
  }

  setFieldValue("investmentType", type);
  setFieldValue("investmentListing", listing);
};
