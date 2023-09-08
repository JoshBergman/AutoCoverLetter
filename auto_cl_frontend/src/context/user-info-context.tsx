import React from "react";

import util from "./local-storage";
import { IUserContext } from "../interfaces/user-info";

export const defaultUserContext: IUserContext = {
  actions: {
    userDispatch: () => {},
  },
  info: {
    firstName: util.getSavedItem("firstName") || "",
    lastName: util.getSavedItem("lastName") || "",
    cover_letter: {
      paragraph_count: 2,
      position_title: util.getSavedItem("positionTitle") || "",
      company_info: {
        company_name: util.getSavedItem("companyName") || "",
        company_values: util.getSavedItem("companyValues") || [""],
        company_connection: util.getSavedItem("companyConnection") || "",
      },
      candidate_info: {
        skills: util.getSavedItem("skills") || [""],
        accomplishments: util.getSavedItem("accomplishments") || [""],
      },
    },
  },
};

export const UserContext =
  React.createContext<IUserContext>(defaultUserContext);
