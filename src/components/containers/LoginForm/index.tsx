import React, { useState } from "react";
import { Input, Card, CardHeader, CardContent, CardFooter } from "../..";

type Props = {
  handleEmailInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const LoginForm = ({
  handleEmailInput,
  handlePasswordInput,
  handleSubmit,
}: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Card className="sm:w-full md:w-1/2 min-w-[30rem]">
      <CardHeader>Login</CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              handleEmailInput(e);
              setEmail(e.target.value);
            }}
            error={""}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              handlePasswordInput(e);
              setPassword(e.target.value);
            }}
            error={""}
          />
          <button
            type="submit"
            disabled={!email || !password}
            className={`mt-4 ${
              !email || !password
                ? "bg-blue-300"
                : "bg-blue-500 hover:bg-blue-700"
            } text-white font-bold py-2 px-4 rounded`}
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
