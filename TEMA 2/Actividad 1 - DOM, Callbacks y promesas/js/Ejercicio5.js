// Función callback que muestra el resultado en el HTML
function mostrarResultado(mensaje) {
    // Obtenemos el div de resultado
    const divResultado = document.getElementById('resultado');

    // Creamos un elemento h3 para mostrar el mensaje
    let texto = document.createElement('h3');
    texto.textContent = mensaje;

    // Limpiamos el contenido anterior
    divResultado.innerHTML = '';

    // Añadimos el nuevo resultado
    divResultado.appendChild(texto);
}

// Función lógica que analiza el texto y llama al callback cuando termina
function analizarTexto(texto, callback) {

    // Si la cadena está vacía mostramos un mensaje
    if (!texto) {
        callback("La cadena está vacía");
        return;
    }

    // Expresiones regulares para comprobar el tipo
    // ^ = inicio de cadena, $ = final de cadena
    const esSoloNumeros = /^[0-9]+$/;           // Solo dígitos
    const esSoloLetras = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;  // Solo letras (incluyendo ñ y tildes)
    const esAlfanumerico = /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ]+$/; // Letras y números mezclados

    // Lógica de comprobación
    if (esSoloNumeros.test(texto)) {
        // Si solo contiene números
        callback("La cadena es NUMÉRICA");
    } 
    else if (esSoloLetras.test(texto)) {
        // Si solo contiene letras
        callback("La cadena es ALFABÉTICA");
    } 
    else if (esAlfanumerico.test(texto)) {
        // Si contiene letras y números mezclados
        callback("La cadena es ALFANUMÉRICA");
    } 
    else {
        // Si contiene caracteres especiales
        callback("La cadena contiene símbolos o caracteres especiales");
    }
}

// Función principal que se llama desde el botón del HTML
function comprobarCadena() {
    // Obtenemos el input y su valor
    const input = document.getElementById('inputCadena');
    const valor = input.value;

    // Limpiamos el error si lo hubiera
    document.getElementById('error').textContent = "";

    // Llamamos a la función de análisis pasando el callback
    analizarTexto(valor, mostrarResultado);
}
