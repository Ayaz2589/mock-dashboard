import { SplitScreen, Navigation } from "../../";

const ScreenRight = () => <div>ScreenRight</div>;

const Dashboard = () => {
  return (
    <SplitScreen dashboard>
      <Navigation />
      <ScreenRight />
    </SplitScreen>
  );
};

export default Dashboard;
