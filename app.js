let amigos = [];

function adicionarAmigo() {
    let campo = document.getElementById('amigo')
    let amigo = campo.value

    if (amigo === ""){
        alert("O campo está vazio")
        return;
    }

    amigos.push(amigo);

    campo.value = "";

    atualizarListadeAmigos();
}

function atualizarListadeAmigos() {
    let listaDeAmigos = document.getElementById('listaAmigos');
    listaDeAmigos.innerHTML = ""

    for (let amigo of amigos) {
        let novoItem =document.createElement('li');
        novoItem.textContent = amigo;
        listaDeAmigos.appendChild(novoItem);
    }
}

function sortearAmigo() {
    if (amigos.length < 2){
        alert("Adicione amigos à lista antes de sortear.")
        return;
    }   
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indiceAleatorio];

    let resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;

    limparLista()
}

function limparLista() {
    amigos = []
    atualizarListadeAmigos();
}