import { Outlet } from "react-router-dom";
import { SplitScreen, Navigation, Container, NavigationDrawer } from "../../";

const Dashboard = () => {
  return (
    <div>
      <NavigationDrawer />
      <SplitScreen dashboard>
        <Navigation />
        <Container>
          <Outlet />
        </Container>
      </SplitScreen>
    </div>
  );
};

export default Dashboard;
