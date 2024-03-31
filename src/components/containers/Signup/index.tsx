import { useState, useEffect } from "react";
import { SignupForm } from "../..";
import { validateEmail, validatePassword } from "../../../utils";
import { useAuthService, useAuth } from "../../../hooks";
import { useNavigate } from "react-router-dom";

export type SignupErrorProps = {
  email: string;
  password: string;
  confirmPassword: string;
  form: string;
};

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<SignupErrorProps>({
    email: "",
    password: "",
    confirmPassword: "",
    form: "",
  });
  const { signup, user } = useAuthService();
  const { setUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setUsertoApplication(user);
  }, [user]);

  const setUsertoApplication = (user: any) => {
    if (user) {
      setUser(user);
      navigate("/dashboard/metrics");
    }
  };

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    setIsLoading: (isLoading: boolean) => void
  ) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        setError({
          email: "",
          password: "Passwords do not match",
          confirmPassword: "Passwords do not match",
          form: "",
        });
        return;
      }
      if (!validateEmail(email) || !validatePassword(password)) {
        setError({
          email: "Invalid email or password",
          password: "Invalid email or password",
          confirmPassword: "",
          form: "",
        });
        return;
      }
      await signup({ email, password });
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      setError({
        ...error as SignupErrorProps,
        form: "Unable to create user. Please try again",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen mx-5 md:mx-0">
      <SignupForm
        handleEmailInput={handleEmailInput}
        handlePasswordInput={handlePasswordInput}
        handleConfirmPasswordInput={handleConfirmPasswordInput}
        handleSubmit={handleSubmit}
        email={email}
        error={error}
        password={password}
        confirmPassword={confirmPassword}
      />
    </div>
  );
};

export default Signup;
