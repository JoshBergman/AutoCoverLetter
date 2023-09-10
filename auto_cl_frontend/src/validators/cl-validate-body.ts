import { ICLBody } from "../interfaces/cl_body";
import { IUserInfo } from "../interfaces/user-info";

export const validateBody = (body: IUserInfo): ICLBody => {
  // return body where all values that have a length of 0 or are an empty array are set to null
  // this is to prevent the backend from getting empty strings and empty arrays
  // which would cause the backend to throw an error
  const validatedBody: ICLBody = {
    firstName: body.firstName === "" ? null : body.firstName,
    lastName: body.lastName === "" ? null : body.lastName,
    cover_letter: {
      paragraph_count:
        body.cover_letter.paragraph_count === 0
          ? null
          : body.cover_letter.paragraph_count,
      position_title:
        body.cover_letter.position_title === ""
          ? null
          : body.cover_letter.position_title,
      company_info: {
        company_name:
          body.cover_letter.company_info.company_name === ""
            ? null
            : body.cover_letter.company_info.company_name,
        company_values:
          body.cover_letter.company_info.company_values.length === 0
            ? null
            : body.cover_letter.company_info.company_values,
        company_connection:
          body.cover_letter.company_info.company_connection.length === 0
            ? null
            : body.cover_letter.company_info.company_connection,
      },
      candidate_info: {
        skills:
          body.cover_letter.candidate_info.skills.length === 0
            ? null
            : body.cover_letter.candidate_info.skills,
        accomplishments:
          body.cover_letter.candidate_info.accomplishments.length === 0
            ? null
            : body.cover_letter.candidate_info.accomplishments,
      },
    },
  };

  return validatedBody;
};
