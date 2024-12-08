// crypto.randomBytes(size)
const crypto = require("crypto")

const randomValue = crypto.randomBytes(6).toString("hex");

console.log(randomValue)

const genRandom = (digit)=>{
    const start = digit ===6 ? 100000 : 100000;
    const end = digit ===6 ? 999999 : 999999;
    return crypto.randomInt(start, end)

}

console.log(genRandom(7))