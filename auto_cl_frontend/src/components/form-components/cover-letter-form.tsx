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
import { validateBody } from "../../validators/cl-validate-body";

interface ICoverLetterFormProps {
  toggleShowingForm: () => void;
}

const CoverLetterForm = ({ toggleShowingForm }: ICoverLetterFormProps) => {
  const [loadingAPI, setLoadingAPI] = useState(false);
  const { info, actions } = useContext(UserContext);
  const dispatch = actions.userDispatch;

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (loadingAPI) return;
    setLoadingAPI(true);
    actions.update_letter(
      "Loading... This may take a few seconds. \nPlease do not refresh the page."
    );

    const body = validateBody(info);
    const url =
      "https://auto-cl-backend-b93e19610dbb.herokuapp.com/ai/coverletter";
    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        res.json().then((data) => {
          actions.update_letter(data.message.content);
        });
      })
      .catch((err) => {
        console.error(err);
        actions.update_letter(
          "Error - Could not generate cover letter, please try again later."
        );
      });

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
    <Modal onClick={toggleShowingForm}>
      <form
        onSubmit={submitHandler}
        id={"cl_form"}
        className={styles.form}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
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
