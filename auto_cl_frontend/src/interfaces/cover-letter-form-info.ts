export interface ICoverLetterFormInfo {
  [key: string]: {
    question: string;
    placeholder: string;
    info: number | string | string[];
    type: string;
    field: string;
  }[];
}
