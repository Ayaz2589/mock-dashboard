import React, { useState, useEffect } from "react";
import {
  Input,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Spinner,
  Button,
} from "../..";
import { Link } from "react-router-dom";

import { LoginErrorProps } from "../Login";

type Props = {
  handleEmailInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    setIsLoading: (isLoading: boolean) => void
  ) => void;
  email: string;
  password: string;
  error: LoginErrorProps;
};

const LoginForm = ({
  handleEmailInput,
  handlePasswordInput,
  handleSubmit,
  email,
  password,
  error,
}: Props) => {
  const [isDisabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state

  useEffect(() => {
    if (email && password) {
      setDisabled(false);
      return;
    }
    setDisabled(true);
  }, [email, password]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    handleSubmit(e, setIsLoading);
  };

  return (
    <Card className="sm:w-full md:w-1/2 min-w-[30rem]">
      <CardHeader>Login</CardHeader>
      <CardContent>
        <form onSubmit={handleFormSubmit}>
          <Input
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleEmailInput}
            error={error.email}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordInput}
            error={error.password}
          />
          <div className="flex items-center w-full">
            <Button type="submit" disabled={isDisabled || isLoading}>
              Submit
            </Button>
            {isLoading && (
              <div className="mx-5">
                <Spinner />
              </div>
            )}
          </div>
          <div className="min-h-[1.75rem] mt-5">
            {error && <p className="p-1 text-sm text-error">{error.form}</p>}
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <div className="flex">
          <div className="mr-5">
            <Link to="/signup">Don't have an account?</Link>
          </div>
          <div className="mr-5">
            <Link to="/forgot-password">Forgot password?</Link>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
