import { useNavigate } from "react-router-dom";
import { Button } from "../../";
import { useNavigation } from "../../../hooks";

const navItems = [
  { value: "Metrics", link: "/dashboard/metrics" },
  { value: "Users", link: "/dashboard/users" },
  { value: "Settings", link: "/dashboard/settings" },
];

const title = "Mock Dashboard";

const Navigation = () => {
  const { toggleDrawer } = useNavigation();
  const navigate = useNavigate();
  return (
    <div className="w-full h-full bg-slate-600 justify-between flex flex-col">
      <div>
        <div className="text-center py-10 font-semibold text-xl text-slate-300">
          {title}
        </div>
        <div className="flex flex-col">
          {navItems.map((item) => (
            <Button
              type="navigation-item"
              onClick={() => {
                navigate(item.link);
                toggleDrawer();
              }}
            >
              {item.value}
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
