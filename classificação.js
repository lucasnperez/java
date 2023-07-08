function imc(peso, altura) {
    const resultado = peso / (altura * altura);
    
    if  (resultado <= 18.5) {
        return "margro";
    } else if (resultado >=18.5 && resultado <= 24.9) {
        return "normal";
    }else if (resultado >=25 && resultado <= 29.9) {
        return "sobrepeso";
    }else if (resultado >=30 && resultado <= 34.9) {
        return "obesidade grau |";
    }else if(resultado >=35 && resultado <= 39.9){
        return "obesidade grau ||";
    }else{
        return "obesidade grau |||";
    }
    
}



console.log(imc(58,1.75));
