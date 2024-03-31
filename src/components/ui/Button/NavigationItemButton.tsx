import React from "react";
import { twMerge } from "tailwind-merge";
import { useLocation } from "react-router-dom";

type Props = {
  onClick?: () => void;
  children: React.ReactNode;
  link: string;
};

const NavigationItemButton = ({ children, onClick, link }: Props) => {
  const location = useLocation();

  const baseClass =
    "h-[4rem] text-left px-10 text-slate-300 hover:bg-primary-hover";
  const activeClass = "bg-primary-hover";
  const inactiveClass = "bg-primary";

  const className = twMerge(
    baseClass,
    location.pathname === link ? activeClass : inactiveClass
  );

  console.log(location.pathname);
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default NavigationItemButton;
