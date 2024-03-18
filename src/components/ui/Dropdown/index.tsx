import { useState } from "react";
import { Button } from "../..";

const Dropdown = () => {
  const [open, setOpen] = useState(true);

  const toggle = () => setOpen(!open);

  return (
    <div>
      <Button type="drop-down" onClick={toggle}>
        Drop Down
      </Button>
      {open && (
        <div>
          <Button type="drop-down-item">Item 1</Button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
