function saySomething(whatToSay) {  
  window.alert(whatToSay);
 // document.getElementById("result").innerHTML = whatToSay;
}

//business logic
function add(number1, number2) {
  let sum = number1 + number2;
  return number1 + number2;
}

function subtract(number1, number2) {
let sum = number1 -number2; 
  return number1 - number2;
}

function multiply(number1, number2) {
  let sum = number1 * number2;
  return number1 * number2;
}


function divide(number, number2) {
  let sum = number1 / number2;
  return number1 / number2;
}

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:")); 
const outputTextSubtract = "The substraction of your numbers equals: " + subtract(number1, number2);
const outputTextDivide = "The division of your numbers equals: " + divide(number1, number2);
const outputTextMultiply = "The multiplication of your numbers equals: " + multiply(number1, number2);
const outputTextAdd = "The addition of your numbers equals: " + add(number1, number2);

window.alert(outputTextAdd);
window.alert(outputTextDivide);
window.alert(outputTextSubtract);
window.alert(outputTextMultiply);
                    // this line is new