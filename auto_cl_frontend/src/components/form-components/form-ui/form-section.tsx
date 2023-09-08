import React, { useState } from "react";

import styles from "../styles/form-section.module.css";
import ShowMoreOrLessButton from "./show-more-or-less-button";
import ResetCompanyInfo from "../form-util/reset-company-info";

interface IFormSectionProps {
  children: React.ReactNode;
  heading: React.ReactNode;
  defaultShow?: boolean;
}

const FormSection = ({ children, heading, defaultShow }: IFormSectionProps) => {
  const [showingSection, setShowingSection] = useState(defaultShow || false);

  //since default is currently only used for company section we use it to add a field reset button for company
  const useCompanyInfoResetButton = defaultShow || false;

  const toggleShowing = () => {
    setShowingSection((prevState) => !prevState);
  };

  return (
    <section className={styles.section}>
      <div className={styles.headingDiv} onClick={toggleShowing}>
        {heading}
        <ShowMoreOrLessButton showingSection={showingSection} />
      </div>
      {showingSection && children}
      {showingSection && useCompanyInfoResetButton && <ResetCompanyInfo />}
    </section>
  );
};

export default FormSection;
