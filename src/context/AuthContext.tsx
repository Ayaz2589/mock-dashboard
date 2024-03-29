import {
  createContext,
  useReducer,
  ReactElement,
  useCallback,
} from "react";

type AuthContextChildrenType = {
  children: ReactElement;
};

type AuthStateType = {
  email: string;
  password: string;
};

type AuthContextType = {
  authState: AuthStateType;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  login: () => void;
  logout: () => void;
};

enum AuthActionType {
  SET_EMAIL = "SET_EMAIL",
  SET_PASSWORD = "SET_PASSWORD",
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

type Actions =
  | { type: AuthActionType.SET_EMAIL; payload: string }
  | { type: AuthActionType.SET_PASSWORD; payload: string }
  | { type: AuthActionType.LOGIN }
  | { type: AuthActionType.LOGOUT };

const initialAuthState: AuthStateType = {
  email: "",
  password: "",
};

const authReducer = (state: AuthStateType, action: Actions): AuthStateType => {
  switch (action.type) {
    case AuthActionType.SET_EMAIL:
      return { ...state, email: action.payload };
    case AuthActionType.SET_PASSWORD:
      return { ...state, password: action.payload };
    case AuthActionType.LOGIN:
      return state;
    case AuthActionType.LOGOUT:
      return { ...initialAuthState };
    default:
      return state;
  }
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

const AuthProvider = ({ children }: AuthContextChildrenType) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  const setEmail = useCallback((email: string) => {
    dispatch({ type: AuthActionType.SET_EMAIL, payload: email });
  }, []);

  const setPassword = useCallback((password: string) => {
    dispatch({ type: AuthActionType.SET_PASSWORD, payload: password });
  }, []);

  const login = useCallback(() => {
    dispatch({ type: AuthActionType.LOGIN });
  }, []);

  const logout = useCallback(() => {
    dispatch({ type: AuthActionType.LOGOUT });
  }, []);

  return (
    <AuthContext.Provider
      value={{ authState: state, setEmail, setPassword, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
