import { Button } from "../../";

const navItems = ["Metrics", "Users", "Settings"];

const title = "Mock Dashboard";

const Navigation = () => {
  return (
    <div className="w-full h-full bg-slate-600 justify-between flex flex-col">
      <div>
        <div className="text-center py-10 font-semibold text-xl text-slate-300">
          {title}
        </div>
        <div className="flex flex-col">
          {navItems.map((item) => (
            <Button type="navigation-item" onClick={() => {}}>
              {item}
            </Button>
          ))}
        </div>
      </div>
      <Button onClick={() => {}} type="navigation-item">
        Log Out
      </Button>
    </div>
  );
};

export default Navigation;
