import { useState, useRef } from "react";
import { Button } from "../..";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggle = () => setOpen(!open);

  return (
    <div ref={dropdownRef}>
      <Button type="drop-down" onClick={toggle}>
        Drop Down
      </Button>
      {open ? (
        <div className="p-1 bg-gray-50 rounded-lg mt-1">
          <Button type="drop-down-item">Item 1</Button>
          <Button type="drop-down-item">Item 1</Button>
          <Button type="drop-down-item">Item 1</Button>
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
