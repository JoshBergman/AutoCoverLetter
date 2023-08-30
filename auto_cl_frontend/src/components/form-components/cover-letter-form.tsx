import { useContext } from "react";

import StringField from "./form-fields/string-field";
import { UserContext } from "../../context/user-info-context";

const CoverLetterForm = () => {
  const { info, actions } = useContext(UserContext);
  const dispatch = actions.userDispatch;

  return (
    <form>
      {info.firstName}
      <StringField
        dispatchPointer={dispatch}
        actionType={"UPDATE_FIRST_NAME"}
        fieldValue={info.firstName}
      />
    </form>
  );
};

export default CoverLetterForm;
