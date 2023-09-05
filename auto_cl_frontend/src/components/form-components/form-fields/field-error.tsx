import styles from "./styles/field-style.module.css";

interface IFieldErrorProps {
  errorMessage: string;
}

const FieldError = ({ errorMessage }: IFieldErrorProps) => {
  return <label className={styles.fieldError}>{errorMessage}</label>;
};

export default FieldError;
