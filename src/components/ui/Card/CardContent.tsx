import React from "react";

type Props = {
  children: React.ReactNode;
};

const CardContent = ({ children }: Props) => (
  <div className="w-full">{children}</div>
);

export default CardContent;
