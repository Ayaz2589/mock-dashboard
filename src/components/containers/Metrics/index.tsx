import { useState } from "react";
import { Header, Dropdown } from "../../";
import { useAuth } from "../../../hooks";

const Metrics = () => {
  const { authState } = useAuth();
  console.log(authState);

  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleSelection = (option: any) => console.log(option);
  
  return (
    <div className="flex flex-col gap-5">
      <Header title="Metrics" />
      <Dropdown
        options={options}
        handleSelection={handleSelection}
        error={error}
      />
    </div>
  );
};

export default Metrics;
