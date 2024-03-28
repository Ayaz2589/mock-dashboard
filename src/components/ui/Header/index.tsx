import { useState } from "react";
import { OpenNavDrawerButton } from "../..";
import { useNavigation } from "../../../hooks";

type Props = {
  title: string;
  onNavButtonClick: () => void;
};

const Header = ({ title, onNavButtonClick }: Props) => {
  const { toggleDrawer } = useNavigation();

  return (
    <div className="flex w-full items-center">
      {/* The button will now only show on screens smaller than the md breakpoint */}
      <div className="md:hidden">
        <OpenNavDrawerButton toggleDrawer={toggleDrawer} />
      </div>
      <h1 className="text-2xl font-semibold ml-[-3rem] md:ml-3 flex-grow text-center md:text-left">
        {title}
      </h1>
    </div>
  );
};

export default Header;
