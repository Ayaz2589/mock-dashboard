import React from "react";

type Props = {
  onClick?: () => void;
  children: React.ReactNode;
};

const downArrow = (
  <svg
    className="w-2.5 h-2.5 ms-3"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 6"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m1 1 4 4 4-4"
    />
  </svg>
);

const DropdownButton = ({ children, onClick }: Props) => {
  return (
    <div
      className="cursor-pointer bg-gray-50 hover:bg-gray-200 text-primary px-4 w-full text-sm rounded-lg p-2.5 flex justify-between items-center border-2"
      onClick={onClick}
    >
      {children}
      <span>{downArrow}</span>
    </div>
  );
};

export default DropdownButton;
