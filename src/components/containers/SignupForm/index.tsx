import React, { useState } from "react";
import {
  Input,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Button,
  Spinner,
} from "../..";
import { Link } from "react-router-dom";
import { SignupErrorProps } from "../Signup";

type Props = {
  handleEmailInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleConfirmPasswordInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    setIsLoading: (isLoading: boolean) => void
  ) => void;
  email: string;
  password: string;
  error: SignupErrorProps;
  confirmPassword: string;
};

const SignUpForm = ({
  handleEmailInput,
  handlePasswordInput,
  handleConfirmPasswordInput,
  handleSubmit,
  email,
  error,
  password,
  confirmPassword,
}: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const isDisabled = !email || !password || !confirmPassword || isLoading;

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    handleSubmit(e, setIsLoading);
  };

  return (
    <Card className="sm:w-full md:w-1/2 min-w-[30rem]">
      <CardHeader>Sign Up</CardHeader>
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
          <Input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordInput}
            error={error.confirmPassword}
          />
          <div className="flex items-center w-full">
            <Button disabled={isDisabled} type="submit">
              Sign Up
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
        <Link to="/login">Already have an account? Log in</Link>
      </CardFooter>
    </Card>
  );
};

export default SignUpForm;
