export const numberValidator = (
  validateNum: number,
  maxAllowed: number,
  minAllowed: number
): [boolean, string] => {
  if (minAllowed > validateNum) {
    return [false, "Number must be " + minAllowed + " or greater."];
  }
  if (maxAllowed < validateNum) {
    return [false, "Number must be less than " + (maxAllowed + 1)];
  }

  return [true, ""];
};
