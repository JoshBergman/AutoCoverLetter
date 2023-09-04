import React, { useState, useRef } from "react";

import { IAction } from "../../../interfaces/user-info";
import FieldError from "./field-error";
import { stringValidator } from "../../../validators/string-field-validation";
import { ICoverLetterFormInfo } from "../../../interfaces/cover-letter-form-info";

interface IStringFieldProps {
  dispatchPointer: React.Dispatch<IAction>;
  actionType: string;
  fieldValue: string;
  fieldInfo: ICoverLetterFormInfo["X"][0];
}

const StringField = ({
  dispatchPointer,
  actionType,
  fieldValue,
  fieldInfo,
}: IStringFieldProps) => {
  const [error, setError] = useState("");
  const fieldRef = useRef<HTMLInputElement>(null);

  const maxLength = fieldInfo.validationSettings?.maxItemLength || 15;
  const errorStyle: React.CSSProperties = {
    border: "2px solid rgb(255, 0, 0, 30%)",
    backgroundColor: "rgb(255, 0, 0, 15%)",
  };

  const doValidations = (fieldVal: string) => {
    const [validInput, errorMsg] = stringValidator(fieldVal, maxLength);
    if (!validInput) {
      setError(errorMsg);
      return false;
    }

    setError("");
    return true;
  };

  const fieldChangeHandler = () => {
    const fieldVal =
      fieldRef.current == null ? "nulled" : fieldRef.current.value;

    //if valid input update context value
    if (doValidations(fieldVal)) {
      dispatchPointer({ type: actionType, payload: fieldVal });
    }
  };

  return (
    <React.Fragment>
      <label htmlFor={fieldInfo.question}>{fieldInfo.question}</label>
      <input
        type="text"
        id={fieldInfo.question}
        placeholder={fieldInfo.placeholder}
        onChange={fieldChangeHandler}
        ref={fieldRef}
        style={error !== "" ? errorStyle : {}}
        value={fieldValue}
      />
      {error !== "" && <FieldError errorMessage={error} />}
    </React.Fragment>
  );
};

export default StringField;
