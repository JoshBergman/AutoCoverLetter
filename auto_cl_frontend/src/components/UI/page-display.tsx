interface IPageDisplayProps {
  pageContents: string;
}

const PageDisplay = ({ pageContents }: IPageDisplayProps) => {
  return <div>{pageContents}</div>;
};

export default PageDisplay;
