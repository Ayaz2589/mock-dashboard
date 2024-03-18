import { SplitScreen, Navigation, Input, Dropdown } from "../../";

const Dashboard = () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleSelection = (option: any) => console.log(option);

  return (
    <SplitScreen dashboard>
      <Navigation />
      <div className="w-1/3">
        <Input placeholder="First Name" />
        <Dropdown options={options} handleSelection={handleSelection} />
      </div>
    </SplitScreen>
  );
};

export default Dashboard;
