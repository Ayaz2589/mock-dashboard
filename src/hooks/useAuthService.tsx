import axios from "axios";
import { useState } from "react";

type LoginProps = {
  email: string;
  password: string;
};

type User = {
  email: string;
  password: string;
  accessToken: string;
  refreshToken: string;
};

const useAuthService = () => {
  const [user, setUser] = useState<User | null>(null);

  const login = async ({ email, password }: LoginProps) => {
    try {
      const { data } = await axios.post(
        "https://app-backend-api-seven.vercel.app/api/auth/login",
        { email, password }
      );
      const { accessToken, refreshToken } = data;
      setUser({ email, password, accessToken, refreshToken });
    } catch (error) {
      console.log(error);
    }
  };

  return { login, user };
};

export default useAuthService;
