function generarDivs(idDiv){
    for (let i = 0; i <= 255; i++){

        let nuevoDiv = document.createElement('div');

        nuevoDiv.style.backgroundColor = "rgb(" + i + "," + i + "," + i + ")"

        let textoDiv = document.createElement('p');
        textoDiv.textContent = "Div número: " + i;

        nuevoDiv.appendChild(textoDiv);
        const divARellenar = document.getElementById(idDiv);
        divARellenar.appendChild(nuevoDiv);
    }
}