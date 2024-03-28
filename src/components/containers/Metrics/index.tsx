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
      <Header title="Metrics" onNavButtonClick={() => {}}/>
      <LoginForm />
    </div>
  );
};

export default Metrics;
