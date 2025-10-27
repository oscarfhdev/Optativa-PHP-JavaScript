function generarNumeros(campoNumeros){ // Le pasamos el elemento input
    const cantidad = campoNumeros.value; // La cantidad es el valor del input

    const tabla = document.createElement('table'); // Creamos un elemento tabla

    let fila;

    const divPrincipal = document.getElementById('wrapper'); // Obtenemos el divPrincipal del HTML 'wrapper'
    
    // Este bucle se ejecutará las veces del valor introducido en el input
    for (let i = 1; i <= cantidad; i++) {
        if(i % 2 == 0){ // Si el resto es 0, el número es par
            // Creamos la fila y el elemento del dato
            fila = document.createElement('tr')
            let dato = document.createElement('td');
            dato.textContent = i;

            fila.appendChild(dato); // Le insertamos el dato a la fila
            tabla.appendChild(fila); // Ahora le insertamos la fila a la tabla
        }        
    }

    // Al acabar el bucle, la tabla con todas las filas añadidas es añadida al wrapper
    divPrincipal.appendChild(tabla);
    
}