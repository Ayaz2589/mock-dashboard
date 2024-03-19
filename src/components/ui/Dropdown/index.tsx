import { useState, useRef, useEffect } from "react";
import { Button } from "../..";
import { useOutsideClick } from "../../../hooks";

type Option = {
  label: string;
  value: string;
};

type Props = {
  handleSelection: (option: any) => void;
  options: Option[];
};

const Dropdown = ({ options, handleSelection }: Props) => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    handleSelection(selectedOption);
  }, [selectedOption]);

  const toggle = () => setOpen(!open);

  useOutsideClick(dropdownRef, () => {
    if (open) setOpen(false);
  });

  const handleClick = (option: Option) => {
    setOpen(false);
    setSelectedOption(option);
  };

  return (
    <div ref={dropdownRef} className="relative">
      <Button type="drop-down" onClick={toggle}>
        {selectedOption ? selectedOption.label : "Please make a selection"}
      </Button>
      {open ? (
        <div className="p-1 bg-gray-50 rounded-lg mt-1 absolute w-full border-solid border-2 shadow-md">
          {options.map((option: Option, index: number) => (
            <Button
              type="drop-down-item"
              key={index}
              onClick={() => handleClick(option)}
            >
              {option.label}
            </Button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
