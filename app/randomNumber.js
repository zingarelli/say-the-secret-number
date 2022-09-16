// game configuration
const minValue = 1;
const maxValue = 1000;
const secret = getRandomNumber();

// HTML elements
const elementMinValue = document.getElementById('min-value');
const elementMaxValue = document.getElementById('max-value');

elementMaxValue.innerHTML = maxValue;
elementMinValue.innerHTML = minValue;
// console.log(`secret number: ${secret}`);

function getRandomNumber(){
    //random returns a number [0, 1[, so we add 1 to make it [1 and maxValue]
    return parseInt(Math.random() * maxValue + 1);
}