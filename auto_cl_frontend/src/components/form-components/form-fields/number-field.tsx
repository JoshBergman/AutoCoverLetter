import React, { useState, useRef } from "react";

import { IAction } from "../../../interfaces/user-info";
import FieldError from "./field-error";
import { numberValidator } from "../../../validators/number-field-validation";

interface IStringFieldProps {
  dispatchPointer: React.Dispatch<IAction>;
  actionType: string;
  fieldValue: number;
}

const NumberField = ({
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

  const doValidations = (fieldVal: number) => {
    const [validInput, errorMsg] = numberValidator(fieldVal, 4, 1);
    if (!validInput) {
      setError(errorMsg);
      return false;
    }

    setError("");
    return true;
  };

  const fieldChangeHandler = () => {
    const fieldVal: number =
      fieldRef.current == null ? -1 : parseInt(fieldRef.current.value + "");

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
        type="number"
        min="0"
        max="999"
        step="1"
        value={fieldValue}
      />
      {error !== "" && <FieldError errorMessage={error} />}
    </React.Fragment>
  );
};

export default NumberField;
