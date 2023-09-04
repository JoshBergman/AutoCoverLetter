export const stringValidator = (
  string: string,
  maxLength: number
): [boolean, string] => {
  const stringLength = string.length;
  if (stringLength > maxLength) {
    return [false, `Too many characters. (Max ${maxLength})`];
  }

  return [true, ""];
};
