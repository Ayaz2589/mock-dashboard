import { useState } from "react";
import { Button } from "../..";

const Dropdown = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <div>
      <Button dropDown onClick={toggle}>
        Drop Down
      </Button>
      {open && (
        <div>
          <Button>Item 1</Button>
          <Button>Item 2</Button>
          <Button>Item 3</Button>
          <Button>Item 4</Button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
