import React from "react";
import { twMerge } from "tailwind-merge";

const Card = ({ children, className }: any) => {
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

export const CardHeader = ({ children }: any) => (
  <div className="w-full text-2xl mb-10 border-b-2 pb-1 text-gray-500">
    {children}
  </div>
);

export const CardContent = ({ children }: any) => (
  <div className="w-full">{children}</div>
);

export const CardFooter = ({ children }: any) => (
  <div className="w-full mt-7 text-sm text-gray-500">{children}</div>
);

export default Card;
