import React, { useState, useEffect } from "react";
import { Input, Card, CardHeader, CardContent, CardFooter } from "../..";
import { twMerge } from "tailwind-merge"

type Props = {
  handleEmailInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  email: string;
  password: string;
};

const LoginForm = ({
  handleEmailInput,
  handlePasswordInput,
  handleSubmit,
  email,
  password,
}: Props) => {
  const [isDisabled, setDisabled] = useState(true);

  useEffect(() => {
    if (email && password) {
      setDisabled(false);
      return;
    }
    setDisabled(true);
  }, [email, password]);

  const baseClasses = "text-white font-bold py-2 px-4 rounded";
  const disabledClasses = "bg-slate-300";
  const defaultClasses = "bg-blue-500 hover:bg-blue-700";

  const buttonClassName = twMerge(
    baseClasses,
    isDisabled ? disabledClasses : defaultClasses
  );

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
            }}
            error={""}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              handlePasswordInput(e);
            }}
            error={""}
          />
          <button
            type="submit"
            disabled={isDisabled}
            className={buttonClassName}
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
