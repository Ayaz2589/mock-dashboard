import { useState } from "react";
import { OpenNavDrawerButton } from "../..";

const Header = ({ title }: { title: string }) => {
  const [isDrawerOpen, toggleDrawerOpen] = useState(false)
  const handleButtonClick = () => {}

  return (
    <div className="flex w-full items-center">
      {/* The button will now only show on screens smaller than the md breakpoint */}
      <div className="md:hidden">
        <OpenNavDrawerButton toggleDrawer={() => {}} />
      </div>
      <h1 className="text-2xl font-semibold ml-[-3rem] md:ml-3 flex-grow text-center md:text-left">
        {title}
      </h1>
    </div>
  );
};

export default Header;
