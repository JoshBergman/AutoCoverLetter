export const stringValidator = (string: string): [boolean, string] => {
  const stringLength = string.length;
  if (stringLength >= 20) {
    return [false, "Too many characters. (Max 20)"];
  }

  return [true, ""];
};
