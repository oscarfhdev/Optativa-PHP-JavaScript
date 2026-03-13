const salida = document.getElementById("contenedor-productos");
let productos;

cargarFichero();

async function cargarFichero() {
    const response = await fetch("productos.xml");  // 1. Pedir el fichero
    const texto = await response.text();           // 2. Convertirlo a texto

    const datos = new DOMParser().parseFromString(texto, "text/xml");

    productos = datos.getElementsByTagName("producto");
    let lista = document.createElement("ol");
    

   for (let i = 0; i < productos.length; i++) {
        let nombre = productos[i].getElementsByTagName("nombre")[0].textContent;
        let categoria = productos[i].getElementsByTagName("categoria")[0].textContent;
        let precio = productos[i].getElementsByTagName("precio")[0].textContent;

        let producto = document.createElement("li");

        producto.textContent = nombre + " | " + categoria + " | " + precio;

        lista.appendChild(producto);
        salida.appendChild(lista);
    }
}


function filtrarProductos(categoriaElegida){
   
    salida.innerHTML = "";  // Siempre limpiar antes


    if(categoriaElegida == "todos"){
            cargarFichero();
            return;
    }

    for (let i = 0; i < productos.length; i++) {
        let categoria = productos[i].getElementsByTagName("categoria")[0].textContent;

        if (categoria === categoriaElegida) {
            const divProducto = document.createElement("div");
            divProducto.style.border = "1px solid black";
            divProducto.style.padding = "20px";

            let txt = "";
            txt += "<strong>Nombre</strong>: " + productos[i].getElementsByTagName("nombre")[0].textContent + "<br>";
            txt += "<strong>Categoría</strong>: " + categoria + "<br>";
            txt += "<strong>Precio</strong>: " + productos[i].getElementsByTagName("precio")[0].textContent + " € <br>";

            divProducto.innerHTML = txt;
            salida.appendChild(divProducto);
        }
    
    }
}