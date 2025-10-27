function enfocar(input){ // Método llamado desde onfocus
    input.style.backgroundColor = "lightgray";
    input.style.color = "blue";
}

function desenfocar(input){ // Método llamado desde onblur, dejamos vacíos los styles
    input.style.backgroundColor = "";
    input.style.color = "";
}


function borrarContenidoInput(){
    const arrayInputs = document.getElementsByTagName("input"); // Obtenemos todos los input del documento

    for (let i = 0; i < arrayInputs.length; i++) {
        arrayInputs[i].value = "";  // Recorremos uno por uno y los dejamos en blanco
    }
}