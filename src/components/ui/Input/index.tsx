import { useState } from "react";

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
  const [error, setError] = useState({ value: false, message: "" });

  console.log("input value: ", value)

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={defaultStyle}
        {...props}
      />
      <div className="min-h-[1.75rem]">
        {error.value && (
          <p className="p-1 text-sm text-red-500">{error.message}</p>
        )}
      </div>
    </div>
  );
};

export default Input;
