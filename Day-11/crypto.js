const crypto = require("crypto")

const genRandom=(digit)=>{
    return crypto.randomInt(100000,999999);
}
console.log(genRandom(5))