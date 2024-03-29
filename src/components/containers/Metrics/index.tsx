import { useState } from "react";
import {
  Input,
  Dropdown,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Toggle,
  Spinner,
  Header,
  LoginForm,
  Login,
} from "../../";

const Metrics = () => {
  return (
    <div className="flex flex-col gap-5">
      <Header title="Metrics" />
      <LoginForm />
      <LoginForm />

      <LoginForm />
      <LoginForm />
      <LoginForm />

    </div>
  );
};

export default Metrics;
