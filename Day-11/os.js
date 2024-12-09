const http = require("http")
const os = require("os")
const crypto = require("crypto")
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const totalRam = os.totalmem()
    const byteTobg=1073741824
   
    res.end(JSON.stringify({
      data:`you have ${totalRam/byteTobg}`,
    }));
  }).listen(8001);
  console.log("app is running ")