let contadorSegundos = 0;
let contadorMinutos = 0;


function ocultarDivYGenerearTabla(){
    const divPrincipal = document.getElementById('principal');
    const gif = document.getElementById('gif1');
    const tabla = document.createElement('table'); // Creamos un elemento tabla


    if(contadorSegundos === 5){
        gif.style.display = "none";

        // Este bucle se ejecutará las veces del valor introducido en el bucle
        for (let i = 1; i <= 5; i++) {
            console.log(i)
            let fila = document.createElement('tr')

            for(let j = 1; j <= 5; j++){
                // Creamos la fila y el elemento del dato
                let dato = document.createElement('td');
                dato.textContent = j; // Podemos ponerle texto, por ejemplo el número de celda
                fila.appendChild(dato); // Le insertamos el dato a la fila
            }

        tabla.appendChild(fila); // Ahora le insertamos la fila a la tabla
    }

    // Al acabar el bucle, la tabla con todas las filas añadidas es añadida al wrapper
    divPrincipal.appendChild(tabla);
    }
    
}

function sumarSegundos(){
    const cadena = document.getElementById('segundos')
    if( contadorSegundos === 59){
        contadorSegundos = 0;
        contadorMinutos++;
    }
    if (contadorSegundos === 5){
        ocultarDivYGenerearTabla();
    }
    cadena.textContent = contadorMinutos + " minutos y " + contadorSegundos++ + " segundos en esta página";
}