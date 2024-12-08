// crypto.randomBytes(size)
const crypto = require("crypto")

const randomValue = crypto.randomBytes(6).toString();

console.log(randomValue)