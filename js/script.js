function add (num1,num2){
  return num1 + num2;
}

function subtract (num1,num2){
  return num1 - num2;
}

function multiply (num1,num2){
  return num1 * num2;
}

function divide (num1,num2){ 
  return num1 / num2;
}

function modulo (num1,num2){
  return num1 % num2;
}

// User Interface
$(document).ready(function() {
  $("form#calculator").submit(function(event) {
    event.preventDefault(); 
    const number1 = parseInt($("#first").val());
    const number2 = parseInt($("#second").val());
    const calculat = $("input:radio[name=calculat]:checked").val();
    let result;
    if (calculat === "add") {
      result = add(number1, number2);
    } else if (calculat === "sub") {
      result = subtract(number1, number2);
    } else if (calculat === "div") {
      result = divide(number1, number2);
    } else if (calculat === "mul") {
      result = multiply(number1, number2);
    } else if (calculat === "mod") {
      result = modulo(number1, number2);
    }
    $("#display").text(result);
  });
});
