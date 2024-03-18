import React from "react";

const Card = ({ children }: any) => {
  // const [left, right] = React.Children.toArray(children);
  // const childElements: React.ReactElement[] = React.Children.toArray(children)
  // console.log(childElements)
  return <div className="rounded-lg p-2 w-full bg-gray-50">Card</div>;
};

export const CardHeader = ({ children }: any) => (
  <div className="w-full">{children}</div>
);

export default Card;
