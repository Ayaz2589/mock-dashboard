import { useState, useEffect } from "react";
import { SignupForm } from "../..";
import { validateEmail, validatePassword } from "../../../utils";
import { useAuthService, useAuth } from "../../../hooks";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
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
        setError("Passwords do not match");
        return;
      }
      if (!validateEmail(email) || !validatePassword(password)) {
        setError("Invalid email or password");
        return;
      }
      await signup({ email, password }, setError);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error(error);
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
