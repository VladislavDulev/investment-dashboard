import CardsSection from "./dashboardComponents/cards/CardsSection";
import Header from "./header/Header";
import Panels from "./panel/Panels";
import "react-toggle/style.css";

const Dashboard = () => {
  return (
    <div className="dashboard w-full">
      <Header />
      <Panels />
      <CardsSection />
    </div>
  );
};

export default Dashboard;
