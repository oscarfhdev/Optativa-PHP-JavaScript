const listaSemaforos = ["./images/semaforo_rojo.png","./images/semaforo_amarillo.png", "./images/semaforo_verde.png"]
let indice = 0;
let movimiento = true; // Añadimos el boolean para para el carrusel


function cambiarBanner(){
    if(movimiento == true){ // Aquí comprobamos la variable
        imagen=document.getElementById("semaforo"); // Obtenemos el banner por id

        // Si llega al final se reinicia
        if(indice==2){
            indice=0;
            imagen.src=listaSemaforos[indice];
        }
        else{ // Sino sigue aumentando hasta que llegue al final
            indice++;
            imagen.src=listaSemaforos[indice];
        }
    }
}

// Función llamada desde el listener (click) de la imagen
function pararCarrusel(){
    if(movimiento != false){
        movimiento = false; // Ponemos la variable en false
        console.log('carrusel parado')
    }

    else{
        movimiento = true; // Se renauda
    }
    
}