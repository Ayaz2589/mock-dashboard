import { useState, useRef, useEffect } from "react";
import { DropdownButton, DropdownItemButton } from "../..";
import { useOutsideClick } from "../../../hooks";

export type Option = {
  label: string;
  value: string;
};

type Props = {
  handleSelection: (option: Option | null) => void;
  options: Option[];
  error: string;
};

const Dropdown = ({ options, handleSelection, error }: Props) => {
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
    <div ref={dropdownRef} className="relative my-2">
      <DropdownButton onClick={toggle}>
        {selectedOption ? selectedOption.label : "Please make a selection"}
      </DropdownButton>
      {open && (
        <div
          className="p-1 bg-gray-50 rounded-lg mt-1 absolute w-full border-solid border-2 shadow-sm z-10 max-h-60 overflow-auto"
          style={{ maxHeight: "200px", overflowY: "auto" }}
        >
          {options.map((option: Option, index: number) => (
            <DropdownItemButton key={index} onClick={() => handleClick(option)}>
              {option.label}
            </DropdownItemButton>
          ))}
        </div>
      )}
      <div className="min-h-[1.75rem]">
        {error && <p className="p-1 text-sm text-error">{error}</p>}
      </div>
    </div>
  );
};

export default Dropdown;
