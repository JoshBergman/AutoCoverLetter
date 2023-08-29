import { useReducer } from "react";

import { UserContext, defaultUserContext } from "./user-info-context";
import { IUserContext, IUserInfo } from "../interfaces/user-info";

interface IProviderProps {
  children: React.ReactNode;
}

interface IAction {
  type: string;
  payload: string | string[] | number;
}

const userReducer = (state: IUserInfo, action: IAction) => {
  return state;
};

export const UserContextProvider = ({ children }: IProviderProps) => {
  const [userInfoState, dispatch] = useReducer(
    userReducer,
    defaultUserContext.info
  );

  const userContextFinal: IUserContext = {
    actions: {
      userDispatch: dispatch,
    },
    info: userInfoState,
  };

  return (
    <UserContext.Provider value={userContextFinal}>
      {children}
    </UserContext.Provider>
  );
};
