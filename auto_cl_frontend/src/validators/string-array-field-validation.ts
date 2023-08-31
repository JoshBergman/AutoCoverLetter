export const stringArrayValidator = (
  stringArray: string[]
): [boolean, string] => {
  const length = stringArray.length;
  if (length > 3) {
    return [false, "Too many items. (Max 3)"];
  }

  const lengths = stringArray.map((skill) => skill.length);
  if (lengths.filter((skillLength) => skillLength > 15).length > 0) {
    return [false, "Values may only contain 15 characters each"];
  }

  return [true, ""];
};
