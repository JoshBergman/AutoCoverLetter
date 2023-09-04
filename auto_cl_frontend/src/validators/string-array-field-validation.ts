export const stringArrayValidator = (
  stringArray: string[],
  maxItemLength: number,
  maxItems: number
): [boolean, string] => {
  const length = stringArray.length;
  if (length > maxItems) {
    return [false, `Too many items. (Max ${maxItems})`];
  }

  const lengths = stringArray.map((skill) => skill.length);
  if (lengths.filter((skillLength) => skillLength > maxItemLength).length > 0) {
    return [false, `Too many characters. (Max ${maxItemLength})`];
  }

  return [true, ""];
};
