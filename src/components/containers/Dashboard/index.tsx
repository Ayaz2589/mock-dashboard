import { Outlet } from "react-router-dom";
import { SplitScreen, Navigation, Container } from "../../";

const Dashboard = () => {
  return (
    <SplitScreen dashboard>
      <Navigation />
      <Container>
        <Outlet />
      </Container>
    </SplitScreen>
  );
};

export default Dashboard;
