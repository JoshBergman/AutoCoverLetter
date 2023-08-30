import React, { useState, useRef } from "react";

import { IAction } from "../../../interfaces/user-info";
import FieldError from "./field-error";

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

  const doValidations = () => {
    const fieldVal =
      fieldRef.current == null ? "nulled" : fieldRef.current.value;
    if (fieldVal.length > 5) {
      setError("Too Long!");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const fieldChangeHandler = () => {
    const fieldVal =
      fieldRef.current == null ? "nulled" : fieldRef.current.value;
    //update userContext if valid
    if (doValidations()) {
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
