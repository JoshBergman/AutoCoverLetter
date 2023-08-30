import { useContext } from "react";
import { UserContext } from "../context/user-info-context";
import CoverLetterForm from "../components/form-components/cover-letter-form";

const CoverLetterCurator = () => {
  const userCTX = useContext(UserContext);
  const position_title = userCTX.info.firstName;

  const updatePos = () => {
    userCTX.actions.userDispatch({
      type: "UPDATE_FIRST_NAME",
      payload: "John",
    });
  };

  return (
    <div>
      <CoverLetterForm />
    </div>
  );
};

export default CoverLetterCurator;
