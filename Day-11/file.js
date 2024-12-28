const fs = require("fs")

fs.writeFileSync("./nishan.txt", "Hi Nishan Rai");

//async 

fs.writeFile("./nisha.txt", "hello nishan",(err)=>{

})
// sync 
const  result = fs.readFileSync("./contact.txt", "utf-8");
console.log(result)

// Async  (Non -blocking operation)
fs.readFile("./contact.txt", "utf-8",(err, result)=>{
    if(err){
        console.log(" Error ocure", err)
    }else{
        console.log(result)
    }
})

// blocking operation 
fs.appendFileSync("./contact.txt","you are from sindhuli")

fs.cpSync("./contact.txt","./copy.txt")
console.log(fs.statSync("./copy.txt"))