import { useState } from "react";
import { LoginForm } from "../..";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {};

  return (
    <div className="flex items-center justify-center min-h-screen mx-5 md:mx-0">
      <LoginForm
        handleEmailInput={handleEmailInput}
        handlePasswordInput={handlePasswordInput}
        handleSubmit={handleSubmit}
        email={email}
        password={password}
      />
    </div>
  );
};

export default Login;
