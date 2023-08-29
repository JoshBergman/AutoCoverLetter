import { useContext } from "react";
import { UserContext } from "../context/user-info-context";

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
      {position_title}
      <button onClick={updatePos}>Update</button>
    </div>
  );
};

export default CoverLetterCurator;
