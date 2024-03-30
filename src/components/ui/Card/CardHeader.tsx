import React from "react";

type Props = {
  children: React.ReactNode;
};

const CardHeader = ({ children }: Props) => (
  <div className="w-full text-2xl mb-10 border-b-2 pb-1 text-primary">
    {children}
  </div>
);

export default CardHeader;
