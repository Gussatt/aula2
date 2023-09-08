var firstNumber = parseInt(prompt("Insira o primeiro número"));
var secondNumber = parseInt(prompt("Insira o segundo número"));

if (firstNumber == secondNumber) {
    document.write("Os números são iguais");
} else if (firstNumber > secondNumber) {
    document.write(`O maior número é o primeiro número. O número ${firstNumber}`)
} else {
    document.write(`O maior número é o segundo número. O número ${secondNumber}`)
}