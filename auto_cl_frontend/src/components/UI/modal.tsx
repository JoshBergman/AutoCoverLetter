import React from "react";

import styles from "./styles/modal.module.css";

interface IModalProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Modal = ({ children, onClick }: IModalProps) => {
  const onClickHandler = () => {
    onClick();
  };

  return (
    <div onClick={onClickHandler} className={styles.modal}>
      {children}
    </div>
  );
};

export default Modal;
