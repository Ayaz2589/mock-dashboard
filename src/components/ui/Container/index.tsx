import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-5 overflow-auto">{children}</div>;
};

export default Container;
