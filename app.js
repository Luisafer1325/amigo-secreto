// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// 1. Array para almacenar los nombres de los amigos
let listaDeAmigos = [];

// 2. Función para agregar amigos
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre.");
        return;
    }

    if (listaDeAmigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        return;
    }

    listaDeAmigos.push(nombre);
    input.value = "";
    actualizarLista();
}

// 3. Función para actualizar la lista en el HTML
function actualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // Limpia antes de volver a mostrar

    listaDeAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

// 4. Función para sortear un solo amigo al azar
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un amigo.");
        return;
    }

    // Escoge un nombre aleatorio de la lista
    const indice = Math.floor(Math.random() * listaDeAmigos.length);
    const nombreSorteado = listaDeAmigos[indice];

    // Mostrar el resultado
    const ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = ""; // Limpiar antes
    const li = document.createElement("li");
    li.textContent = nombreSorteado;
    ulResultado.appendChild(li);
}