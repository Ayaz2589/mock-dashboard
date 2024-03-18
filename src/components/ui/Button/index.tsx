const defaultStyles =
  "bg-gray-50 hover:bg-gray-200 text-white font-bold px-4 rounded text-gray-700 w-full text-sm rounded-lg p-2.5";

const navigationItemStyles =
  "hover:bg-slate-500 bg-slate-600 h-[4rem] text-left px-10 text-slate-300";

const downArrow = (
  <svg
    className="w-2.5 h-2.5 ms-3"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 6"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m1 1 4 4 4-4"
    />
  </svg>
);

type Props = {
  onClick?: () => void;
  navigationItem?: boolean;
  dropDown?: boolean;
  children: React.ReactNode;
};

const Button = ({
  onClick,
  children,
  navigationItem = false,
  dropDown = false,
}: Props) => {
  const defaultRender = () => <>{children}</>;

  const dropDownRender = () => (
    <div className="flex items-center justify-between">
      {children}
      <span>{downArrow}</span>
    </div>
  );

  return (
    <button
      onClick={onClick}
      className={navigationItem ? navigationItemStyles : defaultStyles}
    >
      {dropDown ? dropDownRender() : defaultRender()}
    </button>
  );
};

export default Button;
