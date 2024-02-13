import Header from "./header/Header";
import Panels from "./panel/Panels";
import "react-toggle/style.css";
import CardsSection from "./cards/CardsSection";

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
