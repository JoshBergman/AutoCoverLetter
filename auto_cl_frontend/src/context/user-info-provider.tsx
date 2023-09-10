import { useReducer, useState } from "react";

import util from "./local-storage";
import { UserContext, defaultUserContext } from "./user-info-context";
import { IUserContext } from "../interfaces/user-info";
import { userReducer } from "./user-reducer";

interface IProviderProps {
  children: React.ReactNode;
}

export const UserContextProvider = ({ children }: IProviderProps) => {
  const [letter, setLetter] = useState<string>(defaultUserContext.cover_letter);
  const [userInfoState, userDispatch] = useReducer(
    userReducer,
    defaultUserContext.info
  );

  const update_letter = (new_letter: string) => {
    setLetter(new_letter);
    util.saveItem("coverLetter", new_letter);
  };

  const userContextFinal: IUserContext = {
    actions: {
      userDispatch: userDispatch,
      update_letter,
    },
    cover_letter: letter,
    info: userInfoState,
  };

  return (
    <UserContext.Provider value={userContextFinal}>
      {children}
    </UserContext.Provider>
  );
};
