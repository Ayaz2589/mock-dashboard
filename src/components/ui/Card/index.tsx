import React from "react";
import { twMerge } from "tailwind-merge";
import { CardHeader, CardContent, CardFooter } from "../..";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className }: Props) => {
  const headerElement = React.Children.toArray(children).find(
    (child) => React.isValidElement(child) && child.type === CardHeader
  );

  const contentElement = React.Children.toArray(children).find(
    (child) => React.isValidElement(child) && child.type === CardContent
  );

  const footerElement = React.Children.toArray(children).find(
    (child) => React.isValidElement(child) && child.type === CardFooter
  );

  if (headerElement && contentElement && footerElement) {
    return (
      <div
        className={twMerge(
          "rounded-lg p-5 w-full bg-gray-50 shadow-sm",
          className
        )}
      >
        <div>{headerElement}</div>
        <div>{contentElement}</div>
        <div>{footerElement}</div>
      </div>
    );
  }

  return <div className="rounded-lg p-2 w-full bg-gray-50">{children}</div>;
};

export default Card;
