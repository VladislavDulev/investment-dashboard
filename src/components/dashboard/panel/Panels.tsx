import InvestmentStatusCard from "../widgets/InvestmentStatusCard";
import ChartComponent from "../widgets/ChartComponent";
import { CardStatusTypes } from "../../../types/cardStatusTypes";

const Panels = () => {
  return (
    <div>
      <div className="panels grid grid-cols-3 gap-10 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 ml-10 mr-10">
        <div className="panel-invested ">
          <InvestmentStatusCard
            cardType={CardStatusTypes.INVESTED}
            title="Total Invested"
          />
        </div>
        <div className="panel-active">
          <InvestmentStatusCard
            cardType={CardStatusTypes.ACTIVE}
            title="Active"
          />
        </div>
        <div className="panel-closed">
          <InvestmentStatusCard
            cardType={CardStatusTypes.CLOSED}
            title="Closed"
          />
        </div>
      </div>
      <div className="panel-chart m-10">
        <ChartComponent />
      </div>
    </div>
  );
};

export default Panels;
