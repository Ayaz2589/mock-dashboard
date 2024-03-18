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
  type?: "drop-down" | "drop-down-item" | "default" | "navigation-item";
  children: React.ReactNode;
};

const Button = ({ onClick, children, type = "default" }: Props) => {
  const renderButtonType = (type: string) => {
    switch (type) {
      case "navigation-item":
        return (
          <button onClick={onClick} className={navigationItemStyles}>
            {children}
          </button>
        );
      case "default":
        return (
          <button onClick={onClick} className={defaultStyles}>
            {children}
          </button>
        );
      case "drop-down":
        return (
          <div
            className="cursor-pointer bg-gray-50 hover:bg-gray-200 text-gray-500 px-4 w-full text-sm rounded-lg p-2.5 flex justify-between items-center"
            onClick={onClick}
          >
            {children}
            <span>{downArrow}</span>
          </div>
        );
      case "drop-down-item":
        return (
          <div
            className="cursor-pointer bg-gray-50 hover:bg-gray-200 text-gray-500 px-4 w-full text-sm rounded-lg p-2.5"
            onClick={onClick}
          >
            {children}
          </div>
        );
      default:
        return (
          <button
            onClick={onClick}
            className="bg-gray-50 hover:bg-gray-200 text-white font-bold px-4 w-full text-sm rounded-lg p-2.5"
          >
            {children}
          </button>
        );
    }
  };

  return renderButtonType(type);
};

export default Button;
