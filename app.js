let amigos = [];

function adicionarAmigo() {
    let campo = document.getElementById('amigo')
    let amigo = campo.value

    if (amigo === ""){
        alert("O campo está vazio")
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