function comprobarInputs() {
    // Obtenemos todos los elementos con la clase 'campo' y 'advertencia'
    const inputs = document.querySelectorAll('.campo');  
    const advertencias = document.getElementsByClassName('advertencia'); 

    // Aquí, a diferencia del ejercicio anterior, hacemos un for clásico para aprovechar la variable i
    for (let i = 0; i < inputs.length; i++) {
            // Comprobamos si está vacío o si no es un número (isNotANumber)
        if (inputs[i].value === "" || !isNaN(inputs[i].value)) { 
            // Como va en orden simplemente mostramos o modificamos los elementos
            inputs[i].style.backgroundColor = "red";
            advertencias[i].style.visibility = "visible"; // Aquí hacemos visible la advertencia
        }
        else{
            inputs[i].style.backgroundColor = "lightcyan";
            advertencias[i].style.visibility = "hidden"; // Hacemos invisible la advertencia
        }
    }    
}