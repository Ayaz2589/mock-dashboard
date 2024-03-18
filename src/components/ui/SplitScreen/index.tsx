import React from "react";

const leftClass = "flex-1 bg-slate-400";

const rightClass = "flex-1 bg-slate-500";

type Props = {
  children: React.ReactNode;
  leftStyles?: string;
  rightStyles?: string;
  isNav?: boolean;
};

const SplitScreen = ({
  children,
  leftStyles = leftClass,
  rightStyles = rightClass,
}: Props) => {
  const [left, right] = React.Children.toArray(children);
  return (
    <div className="flex h-screen bg-slate-200">
      <div className={leftStyles}>{left}</div>
      <div className={rightStyles}>{right}</div>
    </div>
  );
};

export default SplitScreen;
