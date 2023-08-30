interface IFieldErrorProps {
  errorMessage: string;
}

const FieldError = ({ errorMessage }: IFieldErrorProps) => {
  return <label>{errorMessage}</label>;
};

export default FieldError;
