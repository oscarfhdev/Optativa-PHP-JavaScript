function generarTabla(idInputFilas, idInputColumnas){ // Le pasamos el id de los input
    // Ahota obtenemos ambos elementos
    const filas = document.getElementById(idInputFilas);
    const columnas = document.getElementById(idInputColumnas);

    const tabla = document.createElement('table'); // Creamos un elemento tabla


    const divPrincipal = document.getElementById('wrapper'); // Obtenemos el divPrincipal del HTML 'wrapper'
    
    // Este bucle se ejecutará las veces del valor introducido en el input de las filas
    for (let i = 1; i <= filas.value; i++) {
        console.log(i)
        let fila = document.createElement('tr')

        if(i % 2 == 0){
            fila.style.backgroundColor = "lightgrey";
        }

        for(let j = 1; j <= columnas.value; j++){
            // Creamos la fila y el elemento del dato
            let dato = document.createElement('td');
            dato.textContent = j; // Podemos ponerle texto, por ejemplo el número de celda
            if(j % 2 == 0){ // Hacemos lo mismo pero comparando el número de celda
                dato.style.backgroundColor = "lightgrey";
            }

            fila.appendChild(dato); // Le insertamos el dato a la fila

        }

        tabla.appendChild(fila); // Ahora le insertamos la fila a la tabla
    }

    // Al acabar el bucle, la tabla con todas las filas añadidas es añadida al wrapper
    divPrincipal.appendChild(tabla);
    
}