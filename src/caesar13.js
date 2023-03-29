function caesar13(input) {
  const msg = [...input]
  const result = []
  const shift = 13
  // ASCII's number for "A" character
  const startLowerCase = 65
  // ASCII's number for "Z" character
  const endLowerCase = 90
  // ASCII's number for "a" character
  const startUpperCase = 97
  // ASCII's number for "z" character
  const endUpperCase = 122
  // ASCII's number for "0" number
  const startNumbers = 48
  // ASCII's number for "9" number
  const endNumbers = 57

  msg.forEach((letter) => {
    const charCode = letter.charCodeAt()
    // Check if it is a space character
    if (charCode === 32) {
      result.push(' ')
    // Check if it is a number
    } else if (charCode >= startNumbers && charCode <= endNumbers) {
      result.push(String.fromCharCode(charCode))
    // Check if it is a letter
    } else if ((charCode < 65) || (charCode > 90 && charCode < 97) || (charCode > 122)) {
      throw new Error("Message should only contain strings or spaces!")
    // Uppercase
    } else if (charCode < endLowerCase + 1) {
      if ((charCode + shift) % (endLowerCase + 1) < startLowerCase) {
          result.push(String.fromCharCode(((charCode + shift) % (endLowerCase + 1)) + startLowerCase))
      } else {
        result.push(
          String.fromCharCode(
            (charCode + shift) % (endLowerCase + 1)
          )
        )
      }
      // Lowercase
    } else {
      if ((charCode + shift) % (endUpperCase + 1) < startUpperCase) {
        result.push(
          String.fromCharCode(
            ((charCode + shift) % (endUpperCase + 1)) +
              startUpperCase
          )
        )
      } else {
        result.push(
          String.fromCharCode(
            (charCode + shift) % (endUpperCase + 1)
          )
        )
      }
    }
  })
  return result.join('')
}

export default caesar13
