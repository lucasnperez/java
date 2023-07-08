function imc(peso, altura) {
    const resultado = peso / (altura * altura); 
    return resultado;
}

console.log(imc(60, 1.75));
console.log(imc(50, 1.60));
console.log(imc(63, 1.68));
console.log(imc(61, 1.73));
console.log(imc(57, 1.67));


function saudação(nome) {
    console.log(`Bom dia ${nome}`)
}

saudação("Marcela");
saudação("Lucas");

function saudacao() {
    return "Boa noite pessoal";
}
console.log(saudacao());