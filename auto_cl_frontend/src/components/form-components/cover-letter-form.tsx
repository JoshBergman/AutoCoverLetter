import React, { FormEvent, useContext } from "react";

import styles from "./styles/cover-letter-form.module.css";
import sectionStyles from "./styles/form-section.module.css";
import { UserContext } from "../../context/user-info-context";
import { getSingleField } from "./getField";
import { getCoverLetterFormInfo } from "./cover-letter-form-info";
import { ICoverLetterFormInfo } from "../../interfaces/cover-letter-form-info";
import FormSection from "./form-ui/form-section";
import Modal from "../UI/modal";

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
      const sectionHeading = (
        <h5 className={sectionStyles.section_heading}>{cl_key}</h5>
      );

      formFields.push(
        <FormSection heading={sectionHeading} key={"FormX - " + cl_key}>
          {sectionInfo.map((singleField) => {
            const fieldType = singleField.field;
            return getSingleField(fieldType, singleField, dispatch);
          })}
        </FormSection>
      );
    });

    return formFields;
  };

  return (
    <Modal>
      <form className={styles.form}>
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
    </Modal>
  );
};

export default CoverLetterForm;
