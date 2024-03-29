import React from "react";

type Props = {
  onClick?: () => void;
  children: React.ReactNode;
};

const DropdownItemButton = ({ onClick, children }: Props) => {
  return (
    <div
      className="cursor-pointer bg-gray-50 hover:bg-gray-200 text-gray-500 px-4 w-full text-sm rounded-lg p-2.5"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default DropdownItemButton;
