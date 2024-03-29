import React from "react";

const defaultStyles = {
  leftStyles: "flex-1 bg-slate-400 overflow-hidden",
  rightStyles: "flex-1 bg-slate-500 overflow-y-auto",
};

const dashboardStyles = {
  leftStyles:
    "hidden md:flex md:flex-1 min-w-[5rem] max-w-[15rem] overflow-hidden",
  rightStyles: "flex-1 overflow-y-auto",
};

type Props = {
  children: React.ReactNode;
  leftStyles?: string;
  rightStyles?: string;
  dashboard?: boolean;
};

const SplitScreen = ({ children, dashboard = false }: Props) => {
  const [left, right] = React.Children.toArray(children);
  return (
    <div className="flex h-screen">
      <div
        className={
          dashboard ? dashboardStyles.leftStyles : defaultStyles.leftStyles
        }
      >
        {left}
      </div>
      <div
        className={
          dashboard ? dashboardStyles.rightStyles : defaultStyles.rightStyles
        }
      >
        {right}
      </div>
    </div>
  );
};

export default SplitScreen;
