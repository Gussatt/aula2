var numbers = new Array(10);
var sum = 0;


for (let i = 0; i < numbers.length; i++) {
    var input = parseInt(prompt(`Insira o ${i + 1} de ${numbers.length}`));

    numbers[i] = new Number(input);
}

numbers.forEach(num => {
    sum += num;
});

document.write(`O resultado da média aritmética é ${sum / numbers.length}`);
