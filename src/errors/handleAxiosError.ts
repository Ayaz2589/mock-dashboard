import axios, { AxiosError } from 'axios';

export type ErrorResponseData = {
  err: {
    statusCode: number;
    message?: string;
    errors?: any;
  };
};

const handleAxiosError = (error: unknown): string => {
  if (!axios.isAxiosError(error)) {
    console.error("An unexpected error occurred:", error);
    return "An unexpected error occurred.";
  }

  const serverError = error as AxiosError<ErrorResponseData>;

  if (!(serverError && serverError.response && serverError.response.data && serverError.response.data.err)) {
    return "Network error. Please check your connection and try again.";
  }

  const statusCode = serverError.response.data.err.statusCode;
  const data = serverError.response.data.err;

  if (statusCode === 400 && data.errors) {
    return "Bad Request: " + JSON.stringify(data.errors);
  }

  if (statusCode === 401) {
    if (data.message) return data.message;
    return "Invalid email or password";
  }

  if (statusCode === 409) {
    return "User with this email address already exists.";
  }

  if (data.message) {
    return data.message;
  }

  return "An error occurred. Please try again.";
};

export default handleAxiosError;