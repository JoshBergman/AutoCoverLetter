import React, { useState, useRef } from "react";

import { IAction } from "../../../interfaces/user-info";
import FieldError from "./field-error";
import { stringValidator } from "../../../validators/string-field-validation";

interface IStringFieldProps {
  dispatchPointer: React.Dispatch<IAction>;
  actionType: string;
  fieldValue: string;
}

const StringField = ({
  dispatchPointer,
  actionType,
  fieldValue,
}: IStringFieldProps) => {
  const [error, setError] = useState("");
  const fieldRef = useRef<HTMLInputElement>(null);

  const errorStyle: React.CSSProperties = {
    border: "2px solid rgb(255, 0, 0, 30%)",
    backgroundColor: "rgb(255, 0, 0, 15%)",
  };

  const doValidations = (fieldVal: string) => {
    const [validInput, errorMsg] = stringValidator(fieldVal);
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
      <input
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
