import { useContext } from "react";

import StringField from "./form-fields/string-field";
import { UserContext } from "../../context/user-info-context";
import StringArrayField from "./form-fields/string-array-field";
import NumberField from "./form-fields/number-field";

const CoverLetterForm = () => {
  const { info, actions } = useContext(UserContext);
  const dispatch = actions.userDispatch;

  return (
    <form>
      <StringField
        dispatchPointer={dispatch}
        actionType={"UPDATE_FIRST_NAME"}
        fieldValue={info.firstName}
      />
      <StringArrayField
        dispatchPointer={dispatch}
        actionType={"UPDATE_SKILLS"}
        fieldValue={info.cover_letter.candidate_info.skills}
      />
      <NumberField
        dispatchPointer={dispatch}
        actionType={"UPDATE_COVER_LETTER_PARAGRAPH_COUNT"}
        fieldValue={info.cover_letter.paragraph_count}
      />
      <button type="submit">Generate Cover Letter</button>
    </form>
  );
};

export default CoverLetterForm;
