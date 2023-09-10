import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { GoCopy } from "react-icons/go";

import styles from "./styles/page-display.module.css";

interface IPageDisplayProps {
  pageContents: string;
  children?: React.ReactNode;
  useCopyBtn?: boolean;
}

const PageDisplay = ({
  pageContents,
  children,
  useCopyBtn,
}: IPageDisplayProps) => {
  const [copyBtnClicked, setCopyBtnClicked] = useState(false);

  const copyBtnHandler = () => {
    try {
      navigator.clipboard.writeText(pageContents);
      setCopyBtnClicked(true);
      setTimeout(() => {
        setCopyBtnClicked(false);
      }, 3400);
    } catch (err) {
      console.error(err);
    }
  };

  const getStyle = () => {
    if (copyBtnClicked) {
      return {
        backgroundColor: "#2ade1a32",
        color: "green",
      };
    } else {
      return {};
    }
  };

  const pushP = () => {
    const p: React.ReactNode[] = [];
    pageContents.split("\n").forEach((line) => {
      p.push(
        <p className={styles.pageP} key={"p-" + Math.random() + line[0]}>
          {line}
        </p>
      );
    });

    return p;
  };

  return (
    <div className={styles.page}>
      {useCopyBtn && (
        <button
          className={styles.copyBtn}
          onClick={copyBtnHandler}
          style={getStyle()}
        >
          {copyBtnClicked ? <AiOutlineCheck /> : <GoCopy />}
        </button>
      )}
      <div className={styles.textContent}>{pushP()}</div>
      <div className={styles.buttonContainer}>{children}</div>
    </div>
  );
};

export default PageDisplay;
