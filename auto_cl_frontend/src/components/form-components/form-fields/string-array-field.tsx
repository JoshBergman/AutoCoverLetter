import React, { useState, useRef } from "react";

import { IAction } from "../../../interfaces/user-info";
import FieldError from "./field-error";
import { stringArrayValidator } from "../../../validators/string-array-field-validation";
import { ICoverLetterFormInfo } from "../../../interfaces/cover-letter-form-info";

interface IStringFieldProps {
  dispatchPointer: React.Dispatch<IAction>;
  actionType: string;
  fieldValue: string[];
  fieldInfo: ICoverLetterFormInfo["X"][0];
}

const StringArrayField = ({
  dispatchPointer,
  actionType,
  fieldValue,
  fieldInfo,
}: IStringFieldProps) => {
  const [error, setError] = useState("");

  const fieldRef = useRef<HTMLInputElement>(null);
  const displayValue = fieldValue.join(", ");

  const maxStringLength = fieldInfo.validationSettings?.maxItemLength || 18;
  const maxArrayLength = fieldInfo.validationSettings?.maxItems || 4;
  const errorStyle: React.CSSProperties = {
    border: "2px solid rgb(255, 0, 0, 30%)",
    backgroundColor: "rgb(255, 0, 0, 15%)",
  };

  const doValidations = (fieldVal: string[]) => {
    const [validInput, errorMsg] = stringArrayValidator(
      fieldVal,
      maxStringLength,
      maxArrayLength
    );
    if (!validInput) {
      setError(errorMsg);
      return false;
    }
    setError("");
    return true;
  };

  const fieldChangeHandler = () => {
    const fieldVal = fieldRef.current == null ? "" : fieldRef.current.value;
    const updatedArray = fieldVal.split(", ");

    //if valid input update context value
    if (doValidations(updatedArray)) {
      dispatchPointer({
        type: actionType,
        payload: updatedArray,
      });
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
        value={displayValue}
        key={"arrayField-" + fieldInfo.question + "-" + 11}
      />
      {error !== "" && <FieldError errorMessage={error} />}
    </React.Fragment>
  );
};

export default StringArrayField;
