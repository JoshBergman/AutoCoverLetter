import React from "react";

import styles from "./modal.module.css";

interface IModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: IModalProps) => {
  return <div className={styles.modal}>{children}</div>;
};

export default Modal;
