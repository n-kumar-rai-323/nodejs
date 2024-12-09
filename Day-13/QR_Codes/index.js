const QRCode = require('qrcode')
const http = require("http")
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    QRCode.toDataURL("https://www.facebook.com/nishankumar.rai", (err, url) => {
        if (err) console.log(err);
        res.end(`<img src="${url}"/>`);
    })
   
  }).listen(8000)

console.log("Application is Running")