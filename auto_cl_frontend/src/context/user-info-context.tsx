import React from "react";
import { IUserContext } from "../interfaces/user-info";

export const defaultUserContext: IUserContext = {
  actions: {
    userDispatch: () => {},
  },
  info: {
    firstName: "first",
    lastName: "last",
    cover_letter: {
      paragraph_count: 2,
      position_title: "Developer",
      company_info: {
        company_name: "Fake Company",
        company_values: ["hard work", "character"],
        company_connection: "",
      },
      candidate_info: {
        skills: ["React", "Typescript"],
        accomplishments: [""],
      },
    },
  },
};

export const UserContext =
  React.createContext<IUserContext>(defaultUserContext);
