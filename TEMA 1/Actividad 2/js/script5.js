function generarDivs(idDiv){ // llamado automáticamente

    // Se repite 255 veces
    for (let i = 0; i <= 255; i++){

        let nuevoDiv = document.createElement('div'); // creamos el div

        nuevoDiv.style.backgroundColor = "rgb(" + i + "," + i + "," + i + ")" // le establecemos un color con la variable let

        let textoDiv = document.createElement('p'); // ahora creamos un elemento <p>
        textoDiv.textContent = "Div número: " + i; // le seteamos el texto

        nuevoDiv.appendChild(textoDiv); // aquí le añadimos el elemento p al div
        const divARellenar = document.getElementById(idDiv); // obtenemos el div que queremos rellenar con el id pasado por parámetro
        divARellenar.appendChild(nuevoDiv); //por último le añadimos el div creado
    }
}