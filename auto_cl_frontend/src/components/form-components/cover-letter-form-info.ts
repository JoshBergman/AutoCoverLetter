import { ICoverLetterFormInfo } from "../../interfaces/cover-letter-form-info";
import { IUserInfo } from "../../interfaces/user-info";

export const getCoverLetterFormInfo = (
  info: IUserInfo
): ICoverLetterFormInfo => {
  const returnInfo: ICoverLetterFormInfo = {
    Candidate: [
      {
        question: "First Name",
        placeholder: "First Name",
        info: info.firstName,
        type: "UPDATE_FIRST_NAME",
        field: "string",
      },
      {
        question: "Last Name",
        placeholder: "Last Name",
        info: info.lastName,
        type: "UPDATE_LAST_NAME",
        field: "string",
      },
      {
        question: "Highlighted Skills",
        placeholder: "React, Typescript, Node",
        info: info.cover_letter.candidate_info.skills,
        type: "UPDATE_SKILLS",
        field: "stringArray",
        validationSettings: {
          maxItemLength: 15,
          maxItems: 4,
        },
      },
      {
        question: "Highlighted Achievements",
        placeholder:
          "Lead dev team to decrease downtime by 20%, Leveraged AI tools to automate deployment tasks",
        info: info.cover_letter.candidate_info.accomplishments,
        type: "UPDATE_ACCOMPLISHMENTS",
        field: "stringArray",
        validationSettings: {
          maxItemLength: 50,
          maxItems: 3,
        },
      },
    ],
    Company: [
      {
        question: "Company Name",
        placeholder: "SpaceX",
        info: info.cover_letter.company_info.company_name,
        type: "UPDATE_COMPANY_NAME",
        field: "string",
        validationSettings: {
          maxItemLength: 30,
        },
      },
      {
        question: "Position Title",
        placeholder: "Software Engineer",
        info: info.cover_letter.position_title,
        type: "UPDATE_POSITION_TITLE",
        field: "string",
      },
      {
        question: "Related Company Values",
        placeholder: "Hard Work, Integrity, Clean Code",
        info: info.cover_letter.company_info.company_values,
        type: "UPDATE_COMPANY_VALUES",
        field: "stringArray",
      },
      {
        question: "Personal Connection To Company",
        placeholder: "I admire the company's dedication to the enviroment.",
        info: info.cover_letter.company_info.company_connection,
        type: "UPDATE_COMPANY_CONNECTION",
        field: "string",
        validationSettings: {
          maxItemLength: 55,
        },
      },
    ],
    "Cover Letter": [
      {
        question: "Paragraph Count",
        placeholder: "3",
        info: info.cover_letter.paragraph_count,
        type: "UPDATE_COVER_LETTER_PARAGRAPH_COUNT",
        field: "number",
      },
    ],
  };

  return returnInfo;
};
