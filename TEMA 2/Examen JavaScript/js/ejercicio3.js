const salida = document.getElementById("contenedor-productos");
let relojes;

let listaRelojes = JSON.parse(localStorage.getItem("listaRelojes")) || [];

cargarJSON();

async function cargarJSON() {
    // 1. Cargar fichero
    const response = await fetch("relojes.json");
    const texto = await response.text();

    // 2. Parsear a objeto JavaScript
    relojes = JSON.parse(texto);
    let lista = document.createElement("ol");


    // 3. Recorrer directamente como array de objetos
    for (let i = 0; i < relojes.length; i++) {
        let modelo = relojes[i].modelo;       
        let marca = relojes[i].marca;       
        let sumergible = relojes[i].sumergible;       
        let precio = relojes[i].precio;

        let producto = document.createElement("li");

        producto.textContent = modelo + " | " + marca + " | " + sumergible + " | " + precio;

            let botonBorrar = document.createElement("button");
        botonBorrar.textContent = "x"
        botonBorrar.onclick = () => producto.remove();

        producto.appendChild(botonBorrar);
        lista.appendChild(producto);
        salida.appendChild(lista);
    }
}


function filtrarProductos(marcaSeleccionada){
   
    salida.innerHTML = "";  // Siempre limpiar antes



    if(marcaSeleccionada == "todos"){
            cargarJSON();
            return;
    }

    let lista = document.createElement("ol");

    for (let i = 0; i < relojes.length; i++) {
        let marca = relojes[i].marca;

        console.log(marca)
        if (marca == marcaSeleccionada) {
             let modelo = relojes[i].modelo;       
        let marca = relojes[i].marca;       
        let sumergible = relojes[i].sumergible;       
        let precio = relojes[i].precio;

        let producto = document.createElement("li");

        producto.textContent = modelo + " | " + marca + " | " + sumergible + " | " + precio;

        let botonBorrar = document.createElement("button");
        botonBorrar.textContent = "x"
        botonBorrar.onclick = () => producto.remove();

        producto.appendChild(botonBorrar);
        lista.appendChild(producto);

        salida.appendChild(producto);
        }
    
    }
}

function guardarDatos(){
    localStorage.setItem("listaRelojes", JSON.stringify(relojes));
}

function borrarDatos(){
    localStorage.removeItem("listaRelojes");
}