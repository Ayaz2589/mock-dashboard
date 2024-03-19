import {
  SplitScreen,
  Navigation,
  Input,
  Dropdown,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Toggle,
} from "../../";
import { useState } from "react";

const Dashboard = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleSelection = (option: any) => console.log(option);

  const handleOnChange = (e: any) => setValue(e.target.value);

  return (
    <SplitScreen dashboard>
      <Navigation />
      <div className="flex flex-col gap-5 p-5">
        <Card className="sm:w-full md:w-1/2 min-w-[30rem]">
          <CardHeader>Header</CardHeader>
          <CardContent>
            <Input
              placeholder="First Name"
              onChange={handleOnChange}
              value={value}
              error={error}
            />
            <Dropdown
              options={options}
              handleSelection={handleSelection}
              error={error}
            />
            <Toggle
              title="test"
              checked
              onClick={(e) => {
                const value = (e.target as HTMLInputElement).value;
                console.log(value);
              }}
            />
          </CardContent>
          <CardFooter>Footer</CardFooter>
        </Card>
      </div>
    </SplitScreen>
  );
};

export default Dashboard;
