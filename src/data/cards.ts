import { ICard } from "../interfaces/card";
import { CardStatusTypes } from "../types/cardStatusTypes";
import { InvestmentListingsTypes } from "../types/investmentListingsTypes";
import { InvestmentNamesTypes } from "../types/InvestmentNamesTypes";
import { InvestmentTypes } from "../types/investmentTypes";

export const cards: ICard[] = [
  {
    id: 1,
    status: CardStatusTypes.ACTIVE,
    investmentType: InvestmentTypes.STOCKS,
    investmentName: InvestmentNamesTypes.NETFLIX,
    investmentListing: InvestmentListingsTypes.NTFLX,
    value: 1234,
    date: "2023-05-30",
  },
  {
    id: 2,
    status: CardStatusTypes.ACTIVE,
    investmentType: InvestmentTypes.STOCKS,
    investmentName: InvestmentNamesTypes.APPLE,
    investmentListing: InvestmentListingsTypes.AAPL,
    value: 21196,

    date: "2023-07-18",
  },
  {
    id: 3,
    status: CardStatusTypes.ACTIVE,
    investmentType: InvestmentTypes.STOCKS,
    investmentName: InvestmentNamesTypes.DISNEY,
    investmentListing: InvestmentListingsTypes.DIS,
    value: 1234,

    date: "2023-12-23",
  },
  {
    id: 4,
    status: CardStatusTypes.ACTIVE,
    investmentType: InvestmentTypes.COMMODITIES,
    investmentName: InvestmentNamesTypes.GOLD,
    investmentListing: InvestmentListingsTypes.AU,
    value: 8678,
    date: "2024-01-06",
  },
  {
    id: 5,
    status: CardStatusTypes.ACTIVE,
    investmentType: InvestmentTypes.STOCKS,
    investmentName: InvestmentNamesTypes.TESLA,
    investmentListing: InvestmentListingsTypes.TSLA,
    value: 13534,
    date: "2024-01-06",
  },
  {
    id: 6,
    status: CardStatusTypes.ACTIVE,
    investmentType: InvestmentTypes.CRYPTO,
    investmentName: InvestmentNamesTypes.BITCOIN,
    investmentListing: InvestmentListingsTypes.BTC,
    value: 1234,
    date: "2024-01-22",
  },
];
