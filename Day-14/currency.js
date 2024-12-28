const CC = require('currency-converter-lt')
const http = require('http')

const converter =(amount, from, to)=>{
    const currencyConvertor=new CC();
    currencyConvertor.from(from).to(to).amount(Number(amount)).convert().then((response)=>{
        console.log(`${amount} ${from} is equal to ${response} ${to}`);
    })

}

converter("1", "USD","NPR")

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      data: 'Hello World!',
    }));
  });