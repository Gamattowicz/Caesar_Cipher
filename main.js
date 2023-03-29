import caesar13 from './src/caesar13.js'

const decrypted = document.querySelector('.decrypted')
const encrypted = document.querySelector('.encrypted')
const btnEncrypt = document.querySelector('.encryptButton')

const encryptMessage = (e) => {
  e.preventDefault()
  const msg = decrypted.value
  if (msg === '') {
    return alert('You have to enter message to encrypt')
  } else if (!isNaN(msg)) {
    return alert('Message should be a string')
  }
  try {
    encrypted.innerHTML = caesar13(msg)
    console.log(caesar13(msg))
  } catch (error) {
    return alert(error)
  }
}

btnEncrypt.onclick = encryptMessage

decrypted.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault()
    btnEncrypt.click()
  }
})
