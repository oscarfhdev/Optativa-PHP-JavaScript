
// Se llama automáticamente al detectar el curso encima
function redondearImg(img){ // Le pasamos el elemento img
    img.style.borderRadius = "3vw"; // aquí le ponemos el borde redondeado
}

// Se llama automáticamente al detectar que el cursor sale
function reEstablecerImg(img){ // Le pasamos el elemento img
    img.style.borderRadius = "0";
}