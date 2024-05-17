import { createContext, PropsWithChildren, useReducer } from "react";

export type Status = "ON" | "OFF";

interface IAppState {
  status: Status;
}

interface IAction {
  type: string;
  payload?: any;
}

const initialAppState: IAppState = { status: "ON" };

export const ACTION_MAP = {
  TOGGLE_TUBE: "TOGGLE_TUBE",
};
const actions: any = {
  [ACTION_MAP.TOGGLE_TUBE]: (state: IAppState) => {
    const status = state.status === "OFF" ? "ON" : "OFF";
    return { ...state, status };
  },
};

export const appReducer = (
  state: IAppState = initialAppState,
  action: IAction
) => {
  if (!actions[action.type]) {
    return state;
  }

  return actions[action.type](state);
};

export const AppContext = createContext<any>({});

interface IAppProviderProps extends PropsWithChildren {}

export const AppProvider = ({ children }: IAppProviderProps) => {
  const [appState, appDispatcher] = useReducer(appReducer, { status: "ON" });

  return (
    <AppContext.Provider value={{ appState, appDispatcher }}>
      {children}
    </AppContext.Provider>
  );
};
