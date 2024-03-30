import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner, NavigationItemButton } from "../../";
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
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await logout();
      removeUser();
      navigate("/login");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-full bg-primary justify-between flex flex-col">
      <div>
        <div className="text-center py-10 font-semibold text-xl text-primary-text-color">
          {title}
        </div>
        <div className="flex flex-col">
          {navItems.map((item) => (
            <NavigationItemButton
              onClick={() => {
                navigate(item.link);
                toggleDrawer();
              }}
            >
              {item.value}
            </NavigationItemButton>
          ))}
        </div>
      </div>
      <div className="flex items-center w-full">
        <NavigationItemButton onClick={handleLogout}>
          Log Out
        </NavigationItemButton>
        {isLoading && (
          <div className="mx-5">
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
