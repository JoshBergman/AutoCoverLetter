import { IAction, IUserInfo } from "../interfaces/user-info";
import util from "./local-storage";

export const userReducer = (state: IUserInfo, action: IAction): IUserInfo => {
  switch (action.type) {
    case "UPDATE_FIRST_NAME":
      util.saveItem("firstName", action.payload as string);
      return { ...state, firstName: action.payload as string };

    case "UPDATE_LAST_NAME":
      util.saveItem("lastName", action.payload as string);
      return { ...state, lastName: action.payload as string };

    case "UPDATE_COVER_LETTER_PARAGRAPH_COUNT":
      util.saveItem("paragraphCount", action.payload as number);
      return {
        ...state,
        cover_letter: {
          ...state.cover_letter,
          paragraph_count: action.payload as number,
        },
      };

    case "UPDATE_POSITION_TITLE":
      util.saveItem("positionTitle", action.payload as string);
      return {
        ...state,
        cover_letter: {
          ...state.cover_letter,
          position_title: action.payload as string,
        },
      };

    case "UPDATE_COMPANY_NAME":
      util.saveItem("companyName", action.payload as string);
      return {
        ...state,
        cover_letter: {
          ...state.cover_letter,
          company_info: {
            ...state.cover_letter.company_info,
            company_name: action.payload as string,
          },
        },
      };

    case "UPDATE_COMPANY_VALUES":
      util.saveItem("companyValues", action.payload as string[]);
      return {
        ...state,
        cover_letter: {
          ...state.cover_letter,
          company_info: {
            ...state.cover_letter.company_info,
            company_values: action.payload as string[],
          },
        },
      };

    case "UPDATE_COMPANY_CONNECTION":
      util.saveItem("companyConnection", action.payload as string);
      return {
        ...state,
        cover_letter: {
          ...state.cover_letter,
          company_info: {
            ...state.cover_letter.company_info,
            company_connection: action.payload as string,
          },
        },
      };

    case "UPDATE_SKILLS":
      util.saveItem("skills", action.payload as string[]);
      return {
        ...state,
        cover_letter: {
          ...state.cover_letter,
          candidate_info: {
            ...state.cover_letter.candidate_info,
            skills: action.payload as string[],
          },
        },
      };

    case "UPDATE_ACCOMPLISHMENTS":
      util.saveItem("accomplishments", action.payload as string[]);
      return {
        ...state,
        cover_letter: {
          ...state.cover_letter,
          candidate_info: {
            ...state.cover_letter.candidate_info,
            accomplishments: action.payload as string[],
          },
        },
      };

    default:
      return state;
  }
};
