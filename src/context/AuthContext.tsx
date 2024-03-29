import { createContext, useReducer, ReactElement, useCallback } from "react";

type AuthContextChildrenType = {
  children: ReactElement;
};

type AuthStateType = {
  email: string;
  password: string;
  accessToken: string;
  refreshToken: string;
};

type AuthContextType = {
  authState: AuthStateType;
  setUser: (user: AuthStateType) => void;
  removeUser: () => void;
};

enum AuthActionType {
  SET_USER = "SET_USER",
  REMOVE_USER = "REMOVE_USER",
}

type Actions =
  | { type: AuthActionType.SET_USER; payload: AuthStateType }
  | { type: AuthActionType.REMOVE_USER };

const initialAuthState: AuthStateType = {
  email: "",
  password: "",
  accessToken: "",
  refreshToken: "",
};

const authReducer = (state: AuthStateType, action: Actions): AuthStateType => {
  switch (action.type) {
    case AuthActionType.SET_USER:
      const { email, password, accessToken, refreshToken } = action.payload;
      return { ...state, email, password, accessToken, refreshToken };
    case AuthActionType.REMOVE_USER:
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

  const setUser = useCallback((user: AuthStateType) => {
    dispatch({ type: AuthActionType.SET_USER, payload: user });
  }, []);

  const removeUser = useCallback(() => {
    dispatch({ type: AuthActionType.REMOVE_USER });
  }, []);

  return (
    <AuthContext.Provider value={{ authState: state, setUser, removeUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
