function cambioDivisa(idInputCantidad, idSelect1, idSelect2){
    const inputCantidad = document.getElementById(idInputCantidad);
    const select1 = document.getElementById(idSelect1);
    const select2 = document.getElementById(idSelect2);

    let eurosADolares = 1.13;
    let eurosALibras = 0.88;
    let libraADolares = 1.31;

    let resultado;
    console.log(select1.value)
    if(select1.value == "eur" && select2.value == "usd"){
        resultado = inputCantidad.value * eurosADolares;
    }

    else if(select1.value == "usd" && select2.value == "eur"){
        resultado = inputCantidad.value / eurosADolares;
    }

    else if(select1.value == "eur" && select2.value == "lib"){
        resultado = inputCantidad.value * eurosALibras;
    }
    
    else if(select1.value == "lib" && select2.value == "eur"){
        resultado = inputCantidad.value / eurosALibras;
    }

    else if(select1.value == "lib" && select2.value == "usd"){
        resultado = inputCantidad.value * libraADolares;
    }

    else if(select1.value == "usd" && select2.value == "lib"){
        resultado = inputCantidad.value / libraADolares;
    }

    else{
        resultado = inputCantidad.value * 1;
    }



    const pResultado = document.createElement("p");
    pResultado.textContent = "Resultado del cambio de divisa: " + resultado;
    const divResultado = document.getElementById("resultado");
    divResultado.append(pResultado);
}