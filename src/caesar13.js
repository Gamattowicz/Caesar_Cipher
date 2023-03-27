function caesar13(input) {
  if (typeof input !== 'string') {
    throw new Error("Message should be a string");
  }

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

  msg.forEach((letter) => {
    // Uppercase
    if (letter.charCodeAt() === 32) {
      result.push(' ')
    } else if (letter.charCodeAt() < endLowerCase + 1) {
      if ((letter.charCodeAt() + shift) % (endLowerCase + 1) < startLowerCase) {
        result.push(
          String.fromCharCode(
            ((letter.charCodeAt() + shift) % (endLowerCase + 1)) +
              startLowerCase
          )
        )
      } else {
        result.push(
          String.fromCharCode(
            (letter.charCodeAt() + shift) % (endLowerCase + 1)
          )
        )
      }
      // Lowercase
    } else {
      if ((letter.charCodeAt() + shift) % (endUpperCase + 1) < startUpperCase) {
        result.push(
          String.fromCharCode(
            ((letter.charCodeAt() + shift) % (endUpperCase + 1)) +
              startUpperCase
          )
        )
      } else {
        result.push(
          String.fromCharCode(
            (letter.charCodeAt() + shift) % (endUpperCase + 1)
          )
        )
      }
    }
  })
  return result.join('')
}

export default caesar13
