import React, { useState } from "react";
import {
  Input,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  StatePicker,
} from "../..";

const PersonalInformationForm = () => {
  // State for each input field
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  // Dummy error state for demonstration
  const [error, setError] = useState("");

  // Example submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log({ firstName, lastName, email });
  };

  return (
    <Card className="sm:w-full md:w-1/2 min-w-[30rem]">
      <CardHeader>Personal Information</CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            error={error}
          />
          <Input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            error={error}
          />
          <Input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error}
          />
          <StatePicker handleStateSelection={() => {}} error="" />

          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </CardContent>
      <CardFooter>Fill in your details</CardFooter>
    </Card>
  );
};

export default PersonalInformationForm;
