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
let difference = number1 - number2; 
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
const outputTextSubtract = number1.toString() + "-" + number2.toString() + "=" + subtract(number1, number2);
const outputTextDivide = number1.toString() + "/" + number2.toString() + "="  + divide(number1, number2);
const outputTextMultiply = number1.toString() + "*" + number2.toString() + "="  + multiply(number1, number2);
const outputTextAdd = number1.toString() + "+" + number2.toString() + "="  + add(number1, number2);

window.alert(outputTextAdd + "." + "\n" + outputTextSubtract + "." + "\n" + outputTextMultiply + "." + "\n" + outputTextDivide +".");
/*window.alert(outputTextDivide);
window.alert(outputTextSubtract);
window.alert(outputTextMultiply);*/