import { useState, useEffect } from "react";
import { LoginForm } from "../..";
import { useAuthService, useAuth } from "../../../hooks";
import { validateEmail, validatePassword } from "../../../utils";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, user } = useAuthService();
  const { setUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setUsertoApplication(user);
  }, [user]);

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    setIsLoading: (isLoading: boolean) => void
  ) => {
    e.preventDefault();
    try {
      if (!validateEmail(email) || !validatePassword(password)) {
        setError("Invalid email or password");
        return;
      }
      await login({ email, password }, setError);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const setUsertoApplication = (user: any) => {
    if (user) {
      setUser(user);
      navigate("/dashboard/metrics");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen mx-5 md:mx-0">
      <LoginForm
        handleEmailInput={handleEmailInput}
        handlePasswordInput={handlePasswordInput}
        handleSubmit={handleSubmit}
        email={email}
        error={error}
        password={password}
      />
    </div>
  );
};

export default Login;
