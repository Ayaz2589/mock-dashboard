import { Outlet } from "react-router-dom";
import { SplitScreen, Navigation, Container, NavigationDrawer } from "../../";
import { NavigationProvider } from "../../../context";

const Dashboard = () => {
  return (
    <NavigationProvider>
      <div>
        <NavigationDrawer />
        <SplitScreen dashboard>
          <Navigation />
          <Container>
            <Outlet />
          </Container>
        </SplitScreen>
      </div>
    </NavigationProvider>
  );
};

export default Dashboard;
