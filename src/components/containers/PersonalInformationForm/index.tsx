import React, { useState } from "react";
import {
  Input,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  StatePicker,
  Avatar,
} from "../..";

const PersonalInformationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, email });
  };

  return (
    <Card className="sm:w-full md:w-1/2 min-w-[30rem]">
      <CardHeader>Personal Information</CardHeader>
      <CardContent>
        <Avatar
          src="https://example.com/path/to/your/avatar.jpg"
          fallbackSrc="https://via.placeholder.com/150/CCCCCC/FFFFFF?text=+"
          alt="User Name"
          size={100}
          onClick={() => {}}
        />
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
      <CardFooter>Fill out the form</CardFooter>
    </Card>
  );
};

export default PersonalInformationForm;
