const defaultStyles =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";

const navigationItemStyles =
  "hover:bg-slate-300 bg-slate-200 h-[4rem] border-b-2 border-slate-50 text-left px-10";

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
