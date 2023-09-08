var firstNumber = parseInt(prompt("Insira o primeiro número"));
var secondNumber = parseInt(prompt("Insira o segundo número"));
var thirdNumber = parseInt(prompt("Insira o terceiro número"));

if (firstNumber == secondNumber || firstNumber == thirdNumber || secondNumber == thirdNumber) {
    alert("Insira números diferentes!");
    location.href = location.href;
} else if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    document.write(`O maior número é o primeiro número. O número ${firstNumber}`)
} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
    document.write(`O maior número é o segundo número. O número ${secondNumber}`)
} else {
    document.write(`O maior número é o terceiro número. O número ${thirdNumber}`)
}