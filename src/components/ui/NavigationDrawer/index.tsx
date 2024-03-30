import { Navigation } from "../..";
import { useNavigation } from "../../../hooks";

const NavigationDrawer = () => {
  const { navigationState, toggleDrawer } = useNavigation();

  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-primary transform ${
          navigationState.isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        <button
          onClick={toggleDrawer}
          className="absolute top-0 right-0 p-2 m-2 text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <Navigation />
      </div>
    </div>
  );
};

export default NavigationDrawer;
