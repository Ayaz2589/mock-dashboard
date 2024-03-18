const defaultStyles =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";

const navigationItemStyles =
  "hover:bg-slate-500 bg-slate-600 h-[4rem] text-left px-10 text-slate-300";

type Props = {
  onClick: () => void;
  navigationItem?: boolean;
  children: React.ReactNode;
};

const Button = ({ onClick, children, navigationItem = false }: Props) => {
  return (
    <button
      onClick={onClick}
      className={navigationItem ? navigationItemStyles : defaultStyles}
    >
      {children}
    </button>
  );
};

export default Button;
