
var numbers = new Array(4);
var sum = 0;

for (i = 0; i < numbers.length; i++) {
    let input = parseInt(prompt(`Insira o ${i + 1} número de ${numbers.length}`))

    if (input > 0 && input <= 10) {
        numbers[i] = new Number(input);
    } else {
        numbers[i] = new Number(0);
    }

}

document.write(numbers)

numbers.forEach(num => {
    sum += num;
});

var median = sum / numbers.length;

if (median > 5) {
    document.write(`Você passou no teste! Sua média foi de ${median}`);
} else {
    document.write(`Tente novamente! Sua média foi de ${median}`);
}

