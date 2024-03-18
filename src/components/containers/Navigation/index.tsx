import { Button } from "../../";

const navItems = ["Metrics", "Users", "Settings"];

const Navigation = () => {
  return (
    <div className="flex flex-col w-full">
      {navItems.map((item) => (
        <Button styles="hover:bg-slate-300 bg-slate-200 h-[4rem] border-b-2 border-slate-50">
          {item}
        </Button>
      ))}
    </div>
  );
};

export default Navigation;
