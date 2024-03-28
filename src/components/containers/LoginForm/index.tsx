import React from "react";
import {
  Input,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Avatar,
} from "../..";

const LoginForm = () => {
  return (
    <Card className="sm:w-full md:w-1/2 min-w-[30rem]">
      <CardHeader>Login</CardHeader>
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
          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </CardContent>
      <CardFooter>Login to Continue</CardFooter>
    </Card>
  );
};

export default LoginForm;
