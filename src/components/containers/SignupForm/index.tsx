import React from "react";
import {
  Input,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "../..";
const SignUpForm = () => {
  return (
    <Card className="sm:w-full md:w-1/2 min-w-[30rem]">
      <CardHeader>Sign Up</CardHeader>
      <CardContent>
        <form onSubmit={() => {}}>
          <Input
            type="text"
            placeholder="Email"
            value={""}
            onChange={() => {}}
            error={""}
          />
          <Input
            type="password"
            placeholder="Password"
            value={""}
            onChange={() => {}}
            error={""}
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            value={""}
            onChange={() => {}}
            error={""}
          />
          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign Up
          </button>
        </form>
      </CardContent>
      <CardFooter>Sign Up to Continue</CardFooter>
    </Card>
  );
};

export default SignUpForm;
