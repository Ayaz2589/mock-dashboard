import { createContext, useReducer, useCallback, ReactElement } from "react";

type NavigationContextChildrenType = {
  children: ReactElement;
};

type NavigationStateType = {
  isDrawerOpen: boolean;
};

type NavigationContextType = {
  navigationState: NavigationStateType;
  toggleDrawer: () => void;
};

type Actions = {
  type: ActionType;
};

enum ActionType {
  TOGGLE_DRAWER = "TOGGLE_DRAWER",
}

const initialNavigationState = {
  isDrawerOpen: false,
};

const navigationReducer = (
  state: NavigationStateType,
  action: Actions
): NavigationStateType => {
  switch (action.type) {
    case ActionType.TOGGLE_DRAWER:
      return { ...state, isDrawerOpen: !state.isDrawerOpen };
    default:
      return state;
  }
};

export const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
);

const NavigationProvider = ({ children }: NavigationContextChildrenType) => {
  const [state, dispatch] = useReducer(
    navigationReducer,
    initialNavigationState
  );

  const toggleDrawer = useCallback(() => {
    dispatch({ type: ActionType.TOGGLE_DRAWER });
  }, []);

  return (
    <NavigationContext.Provider
      value={{ navigationState: state, toggleDrawer }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
