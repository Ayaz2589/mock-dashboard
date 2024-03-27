import React from "react";
import { Dropdown } from "../../";
import { Option } from "../../ui/Dropdown";
import { states } from "../../../utils";

// Define the Props interface for StatePicker
interface StatePickerProps {
  handleStateSelection: (option: Option | null) => void; // Function that handles the selection
  error: string; // Error message string
}

const StatePicker: React.FC<StatePickerProps> = ({
  handleStateSelection,
  error,
}) => {
  return (
    <div>
      <Dropdown
        options={states}
        handleSelection={handleStateSelection}
        error={error}
      />
    </div>
  );
};

export default StatePicker;
