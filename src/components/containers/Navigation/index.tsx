import { useNavigate } from "react-router-dom";
import { Button } from "../../";
import { useNavigation, useAuthService, useAuth } from "../../../hooks";

const navItems = [
  { value: "Metrics", link: "/dashboard/metrics" },
  { value: "Users", link: "/dashboard/users" },
  { value: "Settings", link: "/dashboard/settings" },
];

const title = "Mock Dashboard";

const Navigation = () => {
  const { toggleDrawer } = useNavigation();
  const navigate = useNavigate();
  const { removeUser } = useAuth();
  const { logout } = useAuthService();

  const handleLogout = async () => {
    try {
      await logout();
      removeUser();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

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
      <Button onClick={handleLogout} type="navigation-item">
        Log Out
      </Button>
    </div>
  );
};

export default Navigation;
