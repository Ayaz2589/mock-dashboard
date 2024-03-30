import { useState } from "react";
import axios, { loginURL, logoutURL, signupURL } from "../api";
import { useAuth } from ".";
import { SignupErrorProps } from "../components/containers/Signup";

type User = {
  email: string;
  password: string;
  accessToken: string;
  refreshToken: string;
};

type CredentialsProps = {
  email: string;
  password: string;
};

const useAuthService = () => {
  const [user, setUser] = useState<User | null>(null);
  const { authState } = useAuth();

  const login = async (
    { email, password }: CredentialsProps,
  ) => {
    try {
      const { data } = await axios.post(loginURL, { email, password });
      const { accessToken, refreshToken } = data;
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      setUser({ email, password, accessToken, refreshToken });
    } catch (error) {
      setUser(null);
      throw new Error("Unable to login with provided credentials");
    }
  };

  const signup = async (
    { email, password }: CredentialsProps,
    setError: (error: SignupErrorProps) => void
  ) => {
    try {
      const { data } = await axios.post(signupURL, { email, password });
      const { accessToken, refreshToken } = data;
      setUser({ email, password, accessToken, refreshToken });
    } catch (error) {
      setError({
        email: "",
        password: "",
        confirmPassword: "",
        form: "Unable to create user. Please try again",
      });
      setUser(null);
      throw new Error("Unable to create user. Please try again");

    }
  };

  const logout = async () => {
    try {
      await axios.delete(logoutURL, {
        data: { refreshToken: authState.refreshToken },
      });
      delete axios.defaults.headers.common["Authorization"];
      setUser(null);
    } catch (error) {
      throw new Error("Error while logging out");
    }
  };

  return { login, logout, signup, user };
};

export default useAuthService;
