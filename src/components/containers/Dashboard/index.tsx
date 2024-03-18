import { SplitScreen } from "../../";

const ScreenLeft = () => <div>ScreenLeft</div>;
const ScreenRight = () => <div>ScreenRight</div>;

const splitScreenProps = {
  leftStyles:
    "hidden md:flex md:flex-1 bg-slate-400 min-w-[5rem] max-w-[15rem]",
  rightStyles: "flex-1 bg-slate-500",
};

const Dashboard = () => {
  return (
    <div className="App">
      <SplitScreen {...splitScreenProps}>
        <ScreenLeft />
        <ScreenRight />
      </SplitScreen>
    </div>
  );
};

export default Dashboard;
