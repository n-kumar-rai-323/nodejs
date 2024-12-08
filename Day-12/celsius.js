const celsiusToFahrenheit=(celsius)=>{
    return (celsius * 9/5)+32;
}

const celsius = 25
const fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`);