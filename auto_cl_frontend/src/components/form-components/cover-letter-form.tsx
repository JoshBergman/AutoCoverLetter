import React, { FormEvent, useContext, useState } from "react";
import { ImCancelCircle } from "react-icons/im";

import styles from "./styles/cover-letter-form.module.css";
import sectionStyles from "./styles/form-section.module.css";
import { UserContext } from "../../context/user-info-context";
import { getSingleField } from "./getField";
import { getCoverLetterFormInfo } from "./cover-letter-form-info";
import { ICoverLetterFormInfo } from "../../interfaces/cover-letter-form-info";
import FormSection from "./form-ui/form-section";
import Modal from "../UI/modal";

interface ICoverLetterFormProps {
  toggleShowingForm: () => void;
}

const CoverLetterForm = ({ toggleShowingForm }: ICoverLetterFormProps) => {
  const [loadingAPI, setLoadingAPI] = useState(false);
  const { info, actions } = useContext(UserContext);
  const dispatch = actions.userDispatch;

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    setLoadingAPI(true);
    //get cover letter from backend then set loading to false

    //placholder
    setTimeout(() => {
      setLoadingAPI(false);
      toggleShowingForm();
    }, 2000);
  };

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
        <FormSection
          defaultShow={cl_key === "Company"}
          heading={sectionHeading}
          key={"FormX - " + cl_key}
        >
          {sectionInfo.map((singleField) => {
            const fieldType = singleField.field;
            return getSingleField(fieldType, singleField, dispatch);
          })}
        </FormSection>
      );
    });

    return formFields;
  };

  const cancelForm = (e: FormEvent) => {
    e.preventDefault();
    toggleShowingForm();
  };

  return (
    <Modal>
      <form onSubmit={submitHandler} id={"cl_form"} className={styles.form}>
        <button className={styles.cancelButton} onClick={cancelForm}>
          <ImCancelCircle />
        </button>
        <h2 className={styles.formHeader}>Cover Letter Information</h2>
        {getFormFields()}
        <button className={styles.button} type="submit">
          {loadingAPI ? "Loading..." : "Generate Cover Letter"}
        </button>
      </form>
    </Modal>
  );
};

export default CoverLetterForm;
