import styles from "./page-display.module.css";

interface IPageDisplayProps {
  pageContents: string;
  children?: React.ReactNode;
}

const PageDisplay = ({ pageContents, children }: IPageDisplayProps) => {
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
      {pushP()}
      {children}
    </div>
  );
};

export default PageDisplay;
