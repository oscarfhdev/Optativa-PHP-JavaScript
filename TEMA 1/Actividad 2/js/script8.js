function comprobarInputs() {
    const inputs = document.querySelectorAll('.campo'); // Obtenemos los elementos que tienen la clase 'campo'

    // Podemos utilizar un for clásico o un forEach
    inputs.forEach(input => {
        // Comprobamos si está vacío o si no es un número (isNotANumber)
        if (input.value === "" || !isNaN(input.value)) {
            input.style.backgroundColor = "red";
        }
        else{
            input.style.backgroundColor = "lightcyan"
        }
    });
}