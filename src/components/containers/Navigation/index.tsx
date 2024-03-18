import { Button } from "../../";

const navItems = ["Metrics", "Users", "Settings"];

const title = "Mock Dashboard";

const Navigation = () => {
  return (
    <div className="w-full h-full bg-slate-600 justify-between flex flex-col">
      <div>
        <div className="text-center py-10 font-semibold text-xl">{title}</div>
        <div className="flex flex-col">
          {navItems.map((item) => (
            <Button navigationItem onClick={() => {}}>
              {item}
            </Button>
          ))}
        </div>
      </div>
      <Button navigationItem onClick={() => {}}>
        Log Out
      </Button>
    </div>
  );
};

export default Navigation;
