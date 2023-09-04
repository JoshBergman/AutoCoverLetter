import { ICoverLetterFormInfo } from "../../interfaces/cover-letter-form-info";
import { IAction } from "../../interfaces/user-info";
import NumberField from "./form-fields/number-field";
import StringArrayField from "./form-fields/string-array-field";
import StringField from "./form-fields/string-field";

export const getSingleField = (
  fieldType: string,
  fieldInfo: ICoverLetterFormInfo["X"][0],
  dispatch: React.Dispatch<IAction>
) => {
  switch (fieldType) {
    case "string":
      return (
        <StringField
          key={"FieldString-" + fieldInfo.placeholder}
          dispatchPointer={dispatch}
          fieldValue={fieldInfo.info as string}
          actionType={fieldInfo.type}
          fieldInfo={fieldInfo}
        />
      );
    case "stringArray":
      return (
        <StringArrayField
          key={"FieldStringArr-" + fieldInfo.placeholder}
          dispatchPointer={dispatch}
          actionType={fieldInfo.type}
          fieldValue={fieldInfo.info as string[]}
          fieldInfo={fieldInfo}
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
