import { useState } from "react";
import styles from "../styles/form-section.module.css";
import ShowMoreOrLessButton from "./show-more-or-less-button";

interface IFormSectionProps {
  children: React.ReactNode;
  heading: React.ReactNode;
}

const FormSection = ({ children, heading }: IFormSectionProps) => {
  const [showingSection, setShowingSection] = useState(false);

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
    </section>
  );
};

export default FormSection;
