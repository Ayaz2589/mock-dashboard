type Props = {
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean | undefined;
};

const Button = ({ onClick, children, type, disabled }: Props) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="bg-slate-500 hover:bg-slate-700 text-white font-bold px-4 rounded text-gray-700 w-full text-sm rounded-lg p-2.5"
    >
      {children}
    </button>
  );
};

export default Button;
