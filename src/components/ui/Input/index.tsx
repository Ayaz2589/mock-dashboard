const defaultStyle =
  "bg-gray-50 border-2 text-gray-800 text-sm rounded-lg block w-full p-2.5 focus:outline-gray-300";

type Props = {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  [key: string]: any;
};

const Input = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  className,
  ...props
}: Props) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={defaultStyle}
      {...props}
    />
  );
};

export default Input;
