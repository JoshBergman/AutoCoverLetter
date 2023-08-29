import { useReducer } from "react";

import { UserContext, defaultUserContext } from "./user-info-context";
import { IUserContext } from "../interfaces/user-info";
import { userReducer } from "./user-reducer";

interface IProviderProps {
  children: React.ReactNode;
}

export const UserContextProvider = ({ children }: IProviderProps) => {
  const [userInfoState, userDispatch] = useReducer(
    userReducer,
    defaultUserContext.info
  );

  const userContextFinal: IUserContext = {
    actions: {
      userDispatch: userDispatch,
    },
    info: userInfoState,
  };

  return (
    <UserContext.Provider value={userContextFinal}>
      {children}
    </UserContext.Provider>
  );
};
