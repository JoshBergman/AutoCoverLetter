import { ICoverLetterFormInfo } from "../../interfaces/cover-letter-form-info";
import { IUserInfo } from "../../interfaces/user-info";

export const getCoverLetterFormInfo = (
  info: IUserInfo
): ICoverLetterFormInfo => {
  const returnInfo: ICoverLetterFormInfo = {
    Candidate: [
      {
        question: "Candidate First Name: ",
        placeholder: "First Name",
        info: info.firstName,
        type: "UPDATE_FIRST_NAME",
        field: "string",
      },
      {
        question: "Candidate Last Name: ",
        placeholder: "Last Name",
        info: info.firstName,
        type: "UPDATE_FIRST_NAME",
        field: "string",
      },
    ],
    Company: [],
    "Cover Letter": [],
  };

  return returnInfo;
};
