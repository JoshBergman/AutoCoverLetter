import React, { useState, useContext } from "react";

import styles from "./styles/cover-letter-curator.module.css";
import CoverLetterForm from "../components/form-components/cover-letter-form";
import PageDisplay from "../components/UI/page-display";
import { UserContext } from "../context/user-info-context";

const CoverLetterCurator = () => {
  const [showingForm, setShowingForm] = useState(true);
  const coverLetter = useContext(UserContext).cover_letter;

  const toggleShowingForm = () => {
    setShowingForm((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <PageDisplay pageContents={coverLetter}>
        <button className={styles.clBtn} onClick={toggleShowingForm}>
          Make A Cover Letter
        </button>
      </PageDisplay>
      {showingForm && <CoverLetterForm toggleShowingForm={toggleShowingForm} />}
    </React.Fragment>
  );
};

export default CoverLetterCurator;
