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

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isDisabled = !email || !password || !confirmPassword || isLoading;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log("User registered:", { email, password });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Card className="sm:w-full md:w-1/2 min-w-[30rem]">
      <CardHeader>Sign Up</CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={error}
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={error}
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
        </form>
      </CardContent>
      <CardFooter>
        <Link to="/login">Already have an account? Log in</Link>
      </CardFooter>
    </Card>
  );
};

export default SignUpForm;
