import React, { useState } from "react";
import { Navigation } from "../.."; // Adjust the import path as necessary

const DrawerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-slate-700 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        <Navigation />
      </div>
    </div>
  );
};

export default DrawerButton;
