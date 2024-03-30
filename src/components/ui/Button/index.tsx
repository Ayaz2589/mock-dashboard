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
      className="bg-primary hover:bg-primary-hover text-white font-bold px-4 rounded w-full text-sm rounded-lg p-2.5"
    >
      {children}
    </button>
  );
};

export default Button;
