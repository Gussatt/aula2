var numbers = new Array(6);
var sum = 0;


for (let i = 0; i < numbers.length; i++) {
    var input = parseInt(prompt(`Insira o ${i + 1} de ${numbers.length}`));

    numbers[i] = new Number(input);
}

numbers.forEach(num => {
    if (num < 72) {
        sum += num
    }
});

document.write(`O resultado da soma é igual à ${sum} <br>`);
document.write("Os números utilizados foram: ")
numbers.forEach(num => {
    document.write(`${num}  `);
});
