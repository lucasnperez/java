let peso = 140;
let altura = 1.69;

let imc = peso / (altura * altura); 

console.log(imc);

if  (imc <= 18.5) {
    console.log("margro");
} else if (imc >=18.5 && imc <= 24.9) {
    console.log("normal");
}else if (imc >=25 && imc <= 29.9) {
    console.log("sobrepeso");
}else if (imc >=30 && imc <= 34.9) {
    console.log("obesidade grau |");
}else if(imc >=35 && imc <= 39.9){
    console.log("obesidade grau ||");
}else{
    console.log("obesidade grau |||");
}
