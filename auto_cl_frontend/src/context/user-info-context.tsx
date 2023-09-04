import React from "react";
import { IUserContext } from "../interfaces/user-info";

export const defaultUserContext: IUserContext = {
  actions: {
    userDispatch: () => {},
  },
  info: {
    firstName: "",
    lastName: "",
    cover_letter: {
      paragraph_count: 2,
      position_title: "",
      company_info: {
        company_name: "",
        company_values: [""],
        company_connection: "",
      },
      candidate_info: {
        skills: [""],
        accomplishments: [""],
      },
    },
  },
};

export const UserContext =
  React.createContext<IUserContext>(defaultUserContext);
