import React from "react";

type Props = {
  children: React.ReactNode;
};

const CardFooter = ({ children }: Props) => (
  <div className="w-full mt-7 text-sm text-primary">{children}</div>
);

export default CardFooter