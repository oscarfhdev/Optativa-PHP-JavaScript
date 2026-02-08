// Función que crea la promesa de saludo
function generarSaludo(nombre) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Hola " + nombre + "!");
        }, 2000);
    });
}

// Función principal que se llama desde el botón
function saludar() {
    
    const input = document.getElementById('inputNombre');
    const salida = document.getElementById('resultado');
    const nombre = input.value;

    // Comprobamos que el nombre no esté vacío
    if (!nombre) {
        document.getElementById('error').textContent = "Escribe un nombre";
        return;
    }

    // Limpiamos el error si lo hubiera
    document.getElementById('error').textContent = "";

    // Mostramos mensaje de espera
    salida.innerHTML = "Generando saludo... (espera 2 segundos)";

    // Llamamos a la promesa y esperamos a que se resuelva
    generarSaludo(nombre).then(function(saludo) {
        salida.innerHTML = "<h3>" + saludo + "</h3>";
    });

    // Limpiamos el input
    input.value = "";
}
