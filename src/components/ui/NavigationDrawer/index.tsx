import React, { useEffect } from "react";
import { Navigation } from "../..";
import { useNavigation } from "../../../hooks";

const DrawerButton = () => {
  const { navigationState, toggleDrawer } = useNavigation();

  useEffect(() => {
    if (navigationState.isDrawerOpen) {
      // Prevent scrolling on body
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling on body
      document.body.style.overflow = "";
    }

    // Cleanup function to re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [navigationState.isDrawerOpen]); // Dependency array ensures effect runs only when isDrawerOpen changes

  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-slate-700 transform ${
          navigationState.isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        {/* Close Button */}
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

export default DrawerButton;
