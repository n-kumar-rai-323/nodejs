const bcrypt = require("bcryptjs");

const genHash = (string) => {
    return bcrypt.hashSync(String(string), 10)
}

const hash = genHash("Nishan")
console.log({hash})

const compareHash = (string, hashString)=>{
    return bcrypt.compareSync(String(string), hashString);
}
const checkPw = compareHash("Nishan", hash);
console.log({checkPw})