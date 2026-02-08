// Función que se llama desde el botón para procesar la cadena
function procesarCadena(idInputCadena) {
    // Obtenemos el elemento del input a través del ID
    const inputCadena = document.getElementById(idInputCadena);

    // Obtenemos el valor del input
    let cadena = inputCadena.value;

    // Comprobamos que no esté vacío
    if (cadena != "") {
        // Limpiamos el error si lo hubiera
        document.getElementById('error').textContent = "";

        // Separamos la cadena por espacios, esto nos devuelve un array
        let elementos = cadena.split(" ");

        // Llamamos a la función para crear la tabla
        crearTabla(elementos);

        // Limpiamos el input después de procesar
        inputCadena.value = "";

    } else {
        // Si está vacío mostramos el error
        document.getElementById('error').textContent = "Por favor, introduce una cadena de texto.";
    }
}

// Función auxiliar para crear la tabla con los elementos
function crearTabla(arrayElementos) {
    // Obtenemos el div donde pondremos la tabla
    let divResultado = document.getElementById('resultado');

    // Creamos la tabla
    let tabla = document.createElement('table');

    // Creamos la fila de cabecera
    let filaCabecera = document.createElement('tr');
    let thElemento = document.createElement('th');
    thElemento.textContent = "Elemento";
    let thTipo = document.createElement('th');
    thTipo.textContent = "Tipo";

    // Añadimos las cabeceras a la fila
    filaCabecera.appendChild(thElemento);
    filaCabecera.appendChild(thTipo);

    // Añadimos la fila de cabecera a la tabla
    tabla.appendChild(filaCabecera);

    // Recorremos el array de elementos
    for (let i = 0; i < arrayElementos.length; i++) {
        // Obtenemos el elemento actual
        let elemento = arrayElementos[i];

        // Creamos una nueva fila
        let fila = document.createElement('tr');

        // Creamos las celdas
        let tdElemento = document.createElement('td');
        tdElemento.textContent = elemento;

        let tdTipo = document.createElement('td');

        // Determinamos el tipo del elemento y le asignamos la clase correspondiente
        if (esNumero(elemento)) {
            // Si es un número
            tdTipo.textContent = "Número";
            fila.classList.add('filaNumero');
        } else if (esAlfanumerico(elemento)) {
            // Si es alfanumérico (mezcla de letras y números)
            tdTipo.textContent = "Alfanumérico";
            fila.classList.add('filaAlfanumerico');
        } else {
            // Si es solo texto (alfabético)
            tdTipo.textContent = "Texto";
            fila.classList.add('filaTexto');
        }

        // Añadimos las celdas a la fila
        fila.appendChild(tdElemento);
        fila.appendChild(tdTipo);

        // Añadimos la fila a la tabla
        tabla.appendChild(fila);
    }

    // Añadimos la tabla al div de resultado
    divResultado.appendChild(tabla);
}


// Función auxiliar para comprobar si un elemento es un número
function esNumero(elemento) {
    // Usamos una expresión regular para ver si solo contiene dígitos
    // También podríamos usar !isNaN(elemento), pero esta forma es más explícita
    return /^\d+$/.test(elemento);
}

// Función auxiliar para comprobar si un elemento es alfanumérico
function esAlfanumerico(elemento) {
    // Comprobamos que tenga al menos una letra y al menos un número
    let tieneLetra = /[a-zA-Z]/.test(elemento);
    let tieneNumero = /\d/.test(elemento);
    return tieneLetra && tieneNumero;
}
