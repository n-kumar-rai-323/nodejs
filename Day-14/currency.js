const CC = require('currency-converter-lt')


const converter =(amount, from, to)=>{
    const currencyConvertor=new CC();
    currencyConvertor.from(from).to(to).amount(Number(amount)).convert().then((response)=>{
        console.log(`${amount} ${from} is equal to ${response} ${to}`);
    })

}

converter("1", "USD","NPR")