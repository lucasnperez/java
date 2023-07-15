const botao = document.getElementById('trocar-cor');
const botao2 = document.getElementById('vermelho')
const botao3 = document.getElementById('amarelo')
const botao4 = document.getElementById('preto')

botao.addEventListener('click', function trocarcor() {
    let div = document.getElementById('azul');
    
    div.classList.toggle('verde');
    
})

botao2.addEventListener('click', function trocarcor() {
    let div = document.getElementById('azul');
    
    div.classList.toggle('vermelho');
    
})
    
botao3.addEventListener('click', function trocarcor() {
    let div = document.getElementById('azul');
    
    div.classList.toggle('amarelo');
    
})

botao4.addEventListener('click', function trocarcor() {
    let div = document.getElementById('azul');
    
    div.classList.toggle('preto');
    
})