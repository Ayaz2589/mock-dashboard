import { useState } from "react";
import { OpenNavDrawerButton } from "../..";
import { useNavigation } from "../../../hooks";

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  const { toggleDrawer } = useNavigation();

  return (
    <div className="flex w-full items-center">
      {/* The button will now only show on screens smaller than the md breakpoint */}
      <div className="md:hidden">
        <OpenNavDrawerButton toggleDrawer={toggleDrawer} />
      </div>
      <h1 className="text-2xl font-semibold md:ml-3 flex-grow text-left ml-[1rem] text-primary">
        {title}
      </h1>
    </div>
  );
};

export default Header;
