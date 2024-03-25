// NavigationDrawer.tsx
import React, { useState } from 'react';

const NavigationDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Button to toggle navigation drawer */}
      <button
        className="p-2 text-white bg-blue-500 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
      </button>

      {/* Navigation Drawer */}
      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed left-0 top-0 z-50 w-64 h-full bg-white ease-in-out transition-all duration-300`}
      >
        <button
          className="p-2 text-black"
          onClick={() => setIsOpen(false)}
        >
          Close
        </button>
        <nav>
          <ul className="flex flex-col p-4">
            <li><a href="#home" className="block p-2">Home</a></li>
            <li><a href="#about" className="block p-2">About</a></li>
            <li><a href="#services" className="block p-2">Services</a></li>
            <li><a href="#contact" className="block p-2">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavigationDrawer;
