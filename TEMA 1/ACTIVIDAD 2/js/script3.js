function enfocar(input){
    input.style.backgroundColor = "lightgray";
    input.style.color = "blue";
}

function desenfocar(input){
    input.style.backgroundColor = "";
    input.style.color = "";
}


function borrarContenidoInput(){
    const arrayInputs = document.getElementsByTagName("input");

    for (let i = 0; i < arrayInputs.length; i++) {
        arrayInputs[i].value = "";
        
    }
}