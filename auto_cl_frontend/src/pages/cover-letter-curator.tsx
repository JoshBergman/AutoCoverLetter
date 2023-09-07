import React, { useState } from "react";

import styles from "./styles/cover-letter-curator.module.css";
import CoverLetterForm from "../components/form-components/cover-letter-form";
import PageDisplay from "../components/UI/page-display";

const CoverLetterCurator = () => {
  const [showingForm, setShowingForm] = useState(true);

  const toggleShowingForm = () => {
    setShowingForm((prevState) => !prevState);
  };

  const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  return (
    <React.Fragment>
      <PageDisplay pageContents={loremIpsum}>
        <button className={styles.clBtn} onClick={toggleShowingForm}>
          Make A Cover Letter
        </button>
      </PageDisplay>
      {showingForm && <CoverLetterForm toggleShowingForm={toggleShowingForm} />}
    </React.Fragment>
  );
};

export default CoverLetterCurator;
