import { SplitScreen, Navigation, Input } from "../../";

const Dashboard = () => {
  return (
    <SplitScreen dashboard>
      <Navigation />
      <div className="w-1/3">
        <Input placeholder="First Name" />
      </div>
    </SplitScreen>
  );
};

export default Dashboard;
