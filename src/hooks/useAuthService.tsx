import { useState } from "react";
import axios, { loginURL, logoutURL, signupURL } from "../api";
import { useAuth } from ".";

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
    setError: (error: string) => void
  ) => {
    try {
      const { data } = await axios.post(loginURL, { email, password });
      const { accessToken, refreshToken } = data;
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      setUser({ email, password, accessToken, refreshToken });
    } catch (error) {
      setError("Invalid email or password");
      setUser(null);
      console.log(error);
    }
  };

  const signup = async (
    { email, password }: CredentialsProps,
    setError: (error: string) => void
  ) => {
    try {
      const { data } = await axios.post(signupURL, { email, password });
      const { accessToken, refreshToken } = data;
      setUser({ email, password, accessToken, refreshToken });
    } catch (error) {
      setError("Unable to create user. Please try again");
      setUser(null);
      console.log(error);
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
      console.log(error);
    }
  };

  return { login, logout, signup, user };
};

export default useAuthService;
