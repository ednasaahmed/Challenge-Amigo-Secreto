// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let listaAmigos = document.getElementById('listaAmigos');

// Función para asignar los nombres de los amigos en forma de lista
function asignarLista(){
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigos.length; i++){
        console.log(amigos[i]);
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }

}

// Función para poner el texto del resultado
function resultadoSorteo(elemento){
    let resultado = document.getElementById('resultado');
    listaAmigos.innerHTML = "";
    resultado.innerHTML = `El amigo secreto sorteado es: ${elemento}`;
}

// Función para buscar el valor del input y meterlo en el array
function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;

    if (nombreAmigo) {
        amigos.push(nombreAmigo);
        limpiarInput();
        asignarLista();
        return nombreAmigo;
    } else {
        alert('Por favor, inserte un nombre.');
    }
}

// Función para escoger de manera aleatoria a un amigo de la lista
function sortearAmigo(){
    if(amigos.length >= 1){
        let indice = Math.floor(Math.random()*amigos.length);
        let amigoSorteado = amigos[indice];
        resultadoSorteo(amigoSorteado);
        console.log(amigoSorteado);
    } else {
        alert('No hay amigos insertados.')
    }
}

// Función para limpiar el input después de dar clic en el botón
function limpiarInput() {
    document.querySelector('#amigo').value = '';
}
