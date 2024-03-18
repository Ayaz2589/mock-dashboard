import React from "react";

type Props = {
  children: React.ReactNode;
  onDone: () => void;
  currentIndex: number;
  onNext: (data: any) => void;
};

const ControlledFlow = ({ children, onDone, currentIndex, onNext }: Props) => {
  const currentChild = React.Children.toArray(children)[currentIndex];

  const childProps = {
    onNext,
  };

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, childProps);
  }

  return null;
};

export default ControlledFlow;
