function saySomething(whatToSay) {  
  window.alert(whatToSay);
 // document.getElementById("result").innerHTML = whatToSay;
}

function add(number1, number2) {
  return number1 + number2;
}



const result = add(3, 5);
const outputText = "The sum is " + result + ".";    // this line is new
saySomething(outputText);                           // this line is new