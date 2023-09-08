var validPswd = 1234;
var pswdInput = parseInt(prompt("Insira a sua senha: "));

if (validPswd == pswdInput) {
    document.write("Acesso permitido");
} else {
    document.write("Acesso negado");
}