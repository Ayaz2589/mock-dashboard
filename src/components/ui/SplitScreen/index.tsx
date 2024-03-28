import React from "react";

const defaultStyles = {
  leftStyles: "flex-1 bg-slate-400",
  rightStyles: "flex-1 bg-slate-500",
};

const dashboardStyles = {
  leftStyles: "hidden md:flex md:flex-1 min-w-[5rem] max-w-[15rem]",
  rightStyles: "flex-1",
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
