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

// 4. Función para sortear amigos secretos
function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert("Debe haber al menos dos amigos para hacer el sorteo.");
        return;
    }

    // Clonar el array para asignaciones
    let asignaciones = [...listaDeAmigos];

    // Función para mezclar el array
    function mezclar(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    asignaciones = mezclar(asignaciones);

    // Validar que nadie se asigne a sí mismo
    for (let i = 0; i < listaDeAmigos.length; i++) {
        if (listaDeAmigos[i] === asignaciones[i]) {
            return sortearAmigo(); // Reiniciar si alguien se asignó a sí mismo
        }
    }

    // Mostrar resultado
    const ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = "";
    for (let i = 0; i < listaDeAmigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = `${listaDeAmigos[i]} → ${asignaciones[i]}`;
        ulResultado.appendChild(li);
    }
}

