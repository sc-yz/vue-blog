var CryptoJS = require("crypto-js")

// Encrypt
var ciphertext = CryptoJS.AES.encrypt("a123456", "1234567891234567").toString()
console.log(ciphertext)

const Encrypt = (word, iv = "") => {
  let key = "ji12jdyqp1098bzw"
  key = CryptoJS.enc.Utf8.parse(key)
  iv = CryptoJS.enc.Utf8.parse(iv)

  let srcs = CryptoJS.enc.Utf8.parse(word)
  // 加密模式为CBC，补码方式为PKCS5Padding（也就是PKCS7）
  let encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  })

  //返回base64
  return CryptoJS.enc.Base64.stringify(encrypted.ciphertext)
}

console.log(Encrypt("a123456"))

const a = CryptoJS.enc.Base64.parse(
  "eyJ0IjoxLCJjIjoidGVzdCUyMHJlcG9ydCUyMCIsImQiOiIxNjIyNTMzNjQ0MDYxIn0="
).toString(CryptoJS.enc.Utf8)
console.log("a", a)
