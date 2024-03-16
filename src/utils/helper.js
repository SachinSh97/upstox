/**
 *
 * @param {Number} number
 * @param {Number} decimalPlace
 * @returns number roudoff to decimal places
 */
export const roundOff = (number, decimalPlace = 2) => {
  if (number === 0) return 0;

  const factor = Math.pow(10, decimalPlace);
  return Math.round(number * factor) / factor;
};
