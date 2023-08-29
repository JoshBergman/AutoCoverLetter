import { IAction, IUserInfo } from "../interfaces/user-info";

export const userReducer = (state: IUserInfo, action: IAction): IUserInfo => {
  switch (action.type) {
    case "UPDATE_FIRST_NAME":
      return { ...state, firstName: action.payload as string };
    case "UPDATE_LAST_NAME":
      return { ...state, lastName: action.payload as string };
    case "UPDATE_COVER_LETTER_PARAGRAPH_COUNT":
      return {
        ...state,
        cover_letter: {
          ...state.cover_letter,
          paragraph_count: action.payload as number,
        },
      };
    case "UPDATE_POSITION_TITLE":
      return {
        ...state,
        cover_letter: {
          ...state.cover_letter,
          position_title: action.payload as string,
        },
      };
    case "UPDATE_COMPANY_NAME":
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
