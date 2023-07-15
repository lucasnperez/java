let div = document.getElementById("teste");




function createUl(){
    return `
    <ul>
            <li>Arroz</li>
            <li>Feijão</li>
            <li>Picanha</li>
            <li>Cerveja</li>
            <li>Batata</li>
        </ul>
        `
}

document.getElementById('teste').innerHTML = createUl();