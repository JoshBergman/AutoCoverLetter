import React, { FormEvent, useContext } from "react";

import { UserContext } from "../../context/user-info-context";
import { getSingleField } from "./getField";
import { getCoverLetterFormInfo } from "./cover-letter-form-info";
import { ICoverLetterFormInfo } from "../../interfaces/cover-letter-form-info";

const CoverLetterForm = () => {
  const { info, actions } = useContext(UserContext);
  const dispatch = actions.userDispatch;

  const getFormFields = () => {
    //generates each form section and that sections' question fields from "../../interfaces/cover-letter-form-info"
    const cl_info: ICoverLetterFormInfo = getCoverLetterFormInfo(info);
    const cl_info_keys = Object.keys(cl_info); //each key represents a section of the form
    const formFields: React.ReactNode[] = []; //return array

    cl_info_keys.forEach((cl_key) => {
      const sectionInfo = cl_info[cl_key];

      formFields.push(
        <React.Fragment key={"fragX - " + cl_key}>
          <h5>{cl_key}</h5>
          {sectionInfo.map((singleField) => {
            const fieldType = singleField.field;
            return getSingleField(fieldType, singleField, dispatch);
          })}
        </React.Fragment>
      );
    });

    return formFields;
  };

  return (
    <form>
      {getFormFields()}
      <button
        onClick={(e: FormEvent) => {
          e.preventDefault();
          console.log(info.firstName, info.lastName);
        }}
      >
        See
      </button>
      <button type="submit">Generate Cover Letter</button>
    </form>
  );
};

export default CoverLetterForm;
