function cambiarImg(){
    // Obtenemos las dos imágenes por su id
    const imagen1 = document.getElementById('img1');
    const imagen2 = document.getElementById('img2');

    // Ahora comprobamos si la 1º imagen coincide con la que debe de tener
    if(imagen1.src.includes("1.jpg")){ // Si coincide lo cambiamos
        imagen1.src = "./img/2.jpg";
        imagen2.src = "./img/1.jpg";
    }
    else{ // Si no coincide también
        imagen2.src = "./img/2.jpg";
        imagen1.src = "./img/1.jpg";
    }
}