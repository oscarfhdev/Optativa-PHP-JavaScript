function cambiarColor(idDiv, selector){ // Recibimos el id del div y el selector
    const div = document.getElementById(idDiv); // Obtenemos el elento
    div.style.backgroundColor= selector.value; // Le ponemos el fondo según el valor del selector
}