function validarCampos(){
    const listaInput = document.getElementsByTagName("input");

    const inputNombre = listaInput[0];
    const inputNumeroTelefono = listaInput[1];
    const inputDireccion = listaInput[2];

    resetearError()

    for (const caracter of inputNombre.value) {
        if(!isNaN(caracter)){
            mostrarError("El campo nombre contiene números")
            break;
        }
    }

    for (const caracter of inputNumeroTelefono.value) {
        if(isNaN(caracter)){
            mostrarError("El campo número de teléfono contiene letras")
            break;
        }
    }

    for (const caracter of inputDireccion.value) {
        if(!/^[a-zA-Z0-9]*$/.test(caracter)){
            mostrarError("El campo de dirección tiene caracteres no alfanuméricos")
            return;
        }
    }




}

function mostrarError(error){
    const pError = document.getElementById("error");
    pError.textContent += error + ", ";
}

function resetearError(){
    const pError = document.getElementById("error");
    pError.textContent = "";
}