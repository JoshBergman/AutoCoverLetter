import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

import styles from "../styles/form-section.module.css";

interface IShowMoreOrLessButtonProps {
  showingSection: boolean;
}

const ShowMoreOrLessButton = ({
  showingSection,
}: IShowMoreOrLessButtonProps) => {
  return (
    <div>
      {showingSection && <AiOutlineMinusCircle className={styles.expandIcon} />}
      {!showingSection && <AiOutlinePlusCircle className={styles.expandIcon} />}
    </div>
  );
};

export default ShowMoreOrLessButton;
