var yearToday = 2023;
var yearInput = parseInt(prompt("Insira o ano de seu nascimento: "));
var validation = yearToday - yearInput;

if (validation >= 16) {
    document.write("Você já pode votar, pois sua idade é de " + validation + " anos")
} else {
    document.write("Você não pode votar, pois sua idade é de " + validation + " anos")
}