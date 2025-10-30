let contadorSegundos = 0;
let contadorMinutos = 0;

// Obtenemos el gif
const gif = document.getElementById('gif1');


// Esta función solo se llama si han pasado 5 segundos
function ocultarDivYGenerearTabla(){
    // Obtenemos los elementos como el div principal
    const divPrincipal = document.getElementById('principal2');

    const tabla = document.createElement('table'); // Creamos un elemento tabla

    gif.style.display = "none"; // Eliminamos el Gif del HTML con none (si usamos visibility guardaríamos el espacio)

    for (let i = 1; i <= 5; i++) {
        let fila = document.createElement('tr') // Creamos un tr

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

function sumarSegundos(){ // Se llama automáticamente cada segundo
    const cadena = document.getElementById('segundos') // Obtenemos el h2
    if( contadorSegundos === 60){ // Cada vez que llegue a 60 segundo, antes de que se muestre lo ponemos a 0
        contadorSegundos = 0;
        contadorMinutos++; // Además aumentamos en +1 los minutos
    }

    cadena.textContent = contadorMinutos + " minutos y " + contadorSegundos++ + " segundos en esta página"; // Editamos el contenido del texto añadiendo los minutos

    // Aquí añadimos la condición de que en el caso de que llegue a los 5 segundos llame al método
    if (contadorSegundos === 6 && contadorMinutos === 0){
        ocultarDivYGenerearTabla();
    }

    desplazarGif();
}


// Esta función se llama al iniciar el html, ya que la llama la función sumarSegundos()
let posicion = 0;
function desplazarGif(){
    setInterval(() => { // Hacemos que esto se ejecute cada 1ms por la función arrow
        if(contadorSegundos <= 6 ) // Verificamos que pare
        posicion += 10; // Incrementamos el valor
        gif.style.marginLeft = posicion + "px"; // Ahora se lo asignamos con px
  }, 100);    
}