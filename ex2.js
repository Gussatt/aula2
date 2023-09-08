var firstNumber = parseInt(prompt("Insira o seu número"));

if (firstNumber > 0) {
    document.write("O número é positivo")
} else if (firstNumber == 0) {
    document.write(`O número é igual a zero`)
} else {
    document.write(`O número é negativo`)
}