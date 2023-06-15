export const convertToTwoDigit = (number) => {
  return number.toLocaleString('en-US', {
    minimumIntegerDigits: 2
  })
}