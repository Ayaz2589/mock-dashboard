type Props = {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  error: string;
};

const Input = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  className,
  error,
  ...props
}: Props) => {
  return (
    <div className="my-2">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-gray-50 border-2 text-primary text-sm rounded-lg block w-full p-2.5 focus:outline-primary"
        {...props}
      />
      <div className="min-h-[1.75rem]">
        {error && <p className="p-1 text-sm text-error">{error}</p>}
      </div>
    </div>
  );
};

export default Input;
