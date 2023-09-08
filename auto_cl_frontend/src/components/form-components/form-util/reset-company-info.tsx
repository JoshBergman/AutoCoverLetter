import { useContext } from "react";

import styles from "../styles/form-section.module.css";
import { FormEvent } from "react";
import { UserContext } from "../../../context/user-info-context";

const ResetCompanyInfoBtn = () => {
  const dispatch = useContext(UserContext).actions.userDispatch;

  const resetCompanyInfo = (e: FormEvent) => {
    e.preventDefault();

    dispatch({ type: "UPDATE_COMPANY_NAME", payload: "" });
    dispatch({ type: "UPDATE_POSITION_TITLE", payload: "" });
    dispatch({ type: "UPDATE_COMPANY_VALUES", payload: [""] });
    dispatch({ type: "UPDATE_COMPANY_CONNECTION", payload: "" });
  };

  return (
    <button onClick={resetCompanyInfo} className={styles.resetBtn}>
      Reset Company Info
    </button>
  );
};

export default ResetCompanyInfoBtn;
