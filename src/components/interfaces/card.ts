import { InvestmentNamesTypes } from "../../types/InvestmentNamesTypes";
import { CardStatusTypes } from "../../types/cardStatusTypes";
import { InvestmentListingsTypes } from "../../types/investmentListingsTypes";
import { InvestmentTypes } from "../../types/investmentTypes";

export interface ICard {
  id: number;
  status: CardStatusTypes;
  investmentType: InvestmentTypes;
  investmentName: InvestmentNamesTypes;
  investmentListing: InvestmentListingsTypes;
  value: number;
  date: string;
}
