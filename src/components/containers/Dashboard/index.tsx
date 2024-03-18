import { useState } from "react";
import { SplitScreen, Navigation, Input, Dropdown } from "../../";

const Dashboard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    // Add more options as needed
  ];
  return (
    <SplitScreen dashboard>
      <Navigation />
      <div className="w-1/3">
        <Input placeholder="First Name" />
        <Dropdown />
      </div>
    </SplitScreen>
  );
};

export default Dashboard;
