import { OpenNavDrawerButton } from "../..";
import { useNavigation } from "../../../hooks";

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  const { toggleDrawer } = useNavigation();

  return (
    <div className="flex w-full items-center fixed top-0 pt-[2.3rem] pb-[1rem] bg-secondary z-10">
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
