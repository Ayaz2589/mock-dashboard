import React from "react";

type Props = {
  onClick?: () => void;
  children: React.ReactNode;
};

const NavigationItemButton = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="hover:bg-slate-500 bg-slate-600 h-[4rem] text-left px-10 text-slate-300"
    >
      {children}
    </button>
  );
};

export default NavigationItemButton;
