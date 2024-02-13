import Header from "./header/Header";
import Panels from "./panel/Panels";

const Dashboard = () => {
  return (
    <div className="dashboard w-full">
      <Header />
      <Panels />
      <div className="cards"></div>
    </div>
  );
};

export default Dashboard;
