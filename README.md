# Challenge do Amigo Secreto

Este projeto trata-se de um challenge da Formação G8 - One Oracle Next Education em parceria com a Alura.

O objetivo do challenge é desenvolver a parte logica de um site de sorteio de nomes com Java Script

## Funcionalidades

### Adicionar amigo

Foi criado um array para armazenar os nomes.
```javascript
let amigo = [];
````
A função `adicionarAmigo()` permite adicionar um novo amigo à lista. O nome do amigo é obtido a partir de um campo de texto no HTML.

```javascript
function adicionarAmigo() {
    let campo = document.getElementById('amigo');
    let amigo = campo.value;

    if (amigo === "") {
        alert("O campo está vazio");
        return;
    }

    amigos.push(amigo);
    campo.value = "";
    atualizarListadeAmigos();
}
````
### Atualizar Lista de Amigos

A função `atualizarListadeAmigos()` atualiza a lista de amigos exibida no HTML. Ela itera sobre o array amigos e adiciona cada nome como um novo item `(<li>)` em uma lista não ordenada `(<ul>)`.

````javaScript
function atualizarListadeAmigos() {
    let listaDeAmigos = document.getElementById('listaAmigos');
    listaDeAmigos.innerHTML = "";

    for (let amigo of amigos) {
        let novoItem = document.createElement('li');
        novoItem.textContent = amigo;
        listaDeAmigos.appendChild(novoItem);
    }
}
````
### Sortear Amigo

A função `sortearAmigo()` realiza o sorteio do amigo secreto. Ela verifica se há amigos na lista antes de prosseguir. Se a lista não estiver vazia, um índice aleatório é gerado e o amigo correspondente é selecionado. O nome do amigo sorteado é exibido no elemento com o ID "resultado".

````javaScript
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione amigos à lista antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
    limparLista();
}
````
### Limpar Lista

A função `limparLista()` redefine o array amigos para vazio e atualiza a exibição da lista no HTML.

```javaScript
function limparLista() {
    amigos = [];
    atualizarListadeAmigos();
}
````

# Execução

Abra o arquivo ``index.html`` no seu navegador padrão.

### Interagindo com a pagina

* Digite o nome de um amigo no campo de texto e clique no botão "Adicionar" para adicioná-lo à lista.
* Repita o processo para adicionar outros amigos.
* Clique no botão "Sortear amigo" para realizar o sorteio. O nome do amigo sorteado será exibido na área de resultado.

# Observações

+ Codigo assume que o HTML tem os IDs "amigo", "listaAmigos" e "resultado"
* Tanto o HTML quanto o CSS foram previamente desenvolvidos pelos instrutores antes de programar a parte do JS
