import React from "react";

type Props = {
  onClick?: () => void;
  children: React.ReactNode;
};

const NavigationItemButton = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="hover:bg-primary-hover bg-primary h-[4rem] text-left px-10 text-slate-300"
    >
      {children}
    </button>
  );
};

export default NavigationItemButton;
