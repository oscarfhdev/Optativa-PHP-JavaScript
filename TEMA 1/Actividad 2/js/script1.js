function comprobar(idcomp){
    let cadena = document.getElementById(idcomp).value;
    
    if(!/^[0-9]*$/.test(cadena)){ // Comprobamos con una expresión regular si es un dígito
        document.getElementById(idcomp).value=""; // Si no lo es lo ponemos en blanco
    }
}