import { useState } from "react";
import axios, { loginURL } from "../api";

type User = {
  email: string;
  password: string;
  accessToken: string;
  refreshToken: string;
};

type LoginProps = {
  email: string;
  password: string;
};

const useAuthService = () => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (
    { email, password }: LoginProps,
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
      return;
    }
  };

  return { login, user };
};

export default useAuthService;
