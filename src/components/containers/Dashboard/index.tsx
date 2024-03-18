import {
  SplitScreen,
  Navigation,
  Input,
  Dropdown,
  Card,
  CardHeader,
} from "../../";

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
      <div className="w-1/2 flex flex-col gap-5 p-2">
        <Input placeholder="First Name" />
        <Dropdown options={options} handleSelection={handleSelection} />
        <Card>
          <CardHeader>Title</CardHeader>
        </Card>
      </div>
    </SplitScreen>
  );
};

export default Dashboard;
