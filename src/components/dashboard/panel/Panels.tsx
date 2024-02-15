import InvestmentStatusCard from "../widgets/InvestmentStatusCard";
import ChartComponent from "../widgets/ChartComponent";
import { CardStatusTypes } from "../../../types/cardStatusTypes";

const Panels = () => {
  return (
    <div className="panels grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 grid-rows-3 gap-20">
      <div className="panel-invested bg-gray-900 p-4 sm:col-span-2 lg:col-span-1 xl:col-span-1">
        <InvestmentStatusCard
          cardType={CardStatusTypes.INVESTED}
          title="total invested"
        />
      </div>

      <div className="panel-active bg-gray-900 p-4 hidden sm:block lg:col-span-1 xl:col-span-1">
        <InvestmentStatusCard
          cardType={CardStatusTypes.ACTIVE}
          title="active"
        />
      </div>
      <div className="panel-closed bg-gray-900 p-4 hidden sm:block lg:col-span-1 xl:col-span-1">
        <InvestmentStatusCard
          cardType={CardStatusTypes.CLOSED}
          title="closed"
        />
      </div>

      <div className="panel-active bg-gray-900 p-4 sm:hidden lg:col-span-1 xl:col-span-1">
        <InvestmentStatusCard
          cardType={CardStatusTypes.ACTIVE}
          title="active"
        />
      </div>
      <div className="panel-closed bg-gray-900 p-4 sm:hidden lg:col-span-1 xl:col-span-1">
        <InvestmentStatusCard
          cardType={CardStatusTypes.CLOSED}
          title="closed"
        />
      </div>
      <div className="panel-chart bg-gray-900 p-4 sm:col-span-2 lg:col-span-3 xl:col-span-3">
        <ChartComponent />
      </div>
    </div>
  );
};

export default Panels;
