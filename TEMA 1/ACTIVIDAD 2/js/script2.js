function enfocar(input){ // Método llamado desde onfocus
    input.style.backgroundColor = "lightgray";
    input.style.color = "blue";
}

function desenfocar(input){ // Método llamado desde onblur, dejamos vacíos los styles
    input.style.backgroundColor = "";
    input.style.color = "";
}