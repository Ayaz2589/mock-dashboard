import { Outlet } from "react-router-dom";
import { SplitScreen, Navigation } from "../../";

const Dashboard = () => {
  return (
    <SplitScreen dashboard>
      <Navigation />
      <Outlet />
    </SplitScreen>
  );
};

export default Dashboard;
