import React, { useContext } from "react";

import { UserContext } from "../../context/user-info-context";
import { getCoverLetterFormInfo } from "./cover-letter-form-info";
import { ICoverLetterFormInfo } from "../../interfaces/cover-letter-form-info";

import StringField from "./form-fields/string-field";
import StringArrayField from "./form-fields/string-array-field";
import NumberField from "./form-fields/number-field";

const CoverLetterForm = () => {
  const { info, actions } = useContext(UserContext);
  const dispatch = actions.userDispatch;

  const getFormFields = () => {
    const getSingleField = (
      fieldType: string,
      fieldInfo: ICoverLetterFormInfo["X"][0]
    ) => {
      switch (fieldType) {
        case "string":
          return (
            <StringField
              key={"FieldString-" + fieldInfo.placeholder}
              dispatchPointer={dispatch}
              actionType={fieldInfo.type}
              fieldValue={fieldInfo.info as string}
            />
          );
        case "stringArray":
          return (
            <StringArrayField
              key={"FieldStringArr-" + fieldInfo.placeholder}
              dispatchPointer={dispatch}
              actionType={fieldInfo.type}
              fieldValue={fieldInfo.info as string[]}
            />
          );
        case "number":
          return (
            <NumberField
              key={"FieldNum-" + fieldInfo.placeholder}
              dispatchPointer={dispatch}
              actionType={fieldInfo.type}
              fieldValue={fieldInfo.info as number}
            />
          );
        default:
          console.error("Error Incorrect Field Type");
          return <p>Error Incorrect Field Type</p>;
      }
    };
    const cl_info: ICoverLetterFormInfo = getCoverLetterFormInfo(info);
    const cl_info_keys = Object.keys(cl_info);
    const formFields: React.ReactNode[] = []; //return array

    cl_info_keys.forEach((cl_key) => {
      const sectionInfo = cl_info[cl_key];
      formFields.push(
        <React.Fragment key={"fragX - " + cl_key}>
          <h5>{cl_key}</h5>
          {sectionInfo.map((singleField) => {
            const fieldType = singleField.field;

            return getSingleField(fieldType, singleField);
          })}
        </React.Fragment>
      );
    });

    return formFields;
  };

  return (
    <form>
      {getFormFields()}
      <StringField
        dispatchPointer={dispatch}
        actionType={"UPDATE_FIRST_NAME"}
        fieldValue={info["firstName"]}
      />
      <StringArrayField
        dispatchPointer={dispatch}
        actionType={"UPDATE_SKILLS"}
        fieldValue={info.cover_letter.candidate_info.skills}
      />
      <NumberField
        dispatchPointer={dispatch}
        actionType={"UPDATE_COVER_LETTER_PARAGRAPH_COUNT"}
        fieldValue={info.cover_letter.paragraph_count}
      />
      <button type="submit">Generate Cover Letter</button>
    </form>
  );
};

export default CoverLetterForm;
