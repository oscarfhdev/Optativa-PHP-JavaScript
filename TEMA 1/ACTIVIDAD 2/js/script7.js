function generarNumeros(campoNumeros){
    const cantidad = campoNumeros.value;

    const tabla = document.createElement('table');

    let fila;

    const divPrincipal = document.getElementById('wrapper');
    
    for (let i = 1; i <= cantidad; i++) {
        if(i % 2 == 0){
            fila = document.createElement('tr')
            let dato = document.createElement('td');
            dato.textContent = i;
            fila.appendChild(dato);
            tabla.appendChild(fila);
        }        
    }

    divPrincipal.appendChild(tabla);
    
}