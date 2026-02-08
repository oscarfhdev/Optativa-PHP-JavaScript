// Clase Producto
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Array de productos
let productos = [
    new Producto("Manzana", 1.50),
    new Producto("Naranja", 2.00),
    new Producto("Plátano", 1.20),
    new Producto("Leche", 1.10),
    new Producto("Pan", 0.80),
    new Producto("Huevos", 2.50)
];

// Mostrar los productos disponibles en el HTML al cargar
const listaProductos = document.getElementById('listaProductos');
for (const p of productos) {
    listaProductos.innerHTML += "<li>" + p.nombre + " - " + p.precio + "€</li>";
}

// Función que busca un producto en el array usando promesas
function buscarEnArray(nombre) {
    return new Promise(function(resolve, reject) {
        if (nombre === "") {
            reject("No se ha introducido nombre");
        } else {
            for (const producto of productos) {
                if (producto.nombre.toLowerCase() === nombre.toLowerCase()) {
                    resolve("El producto " + producto.nombre + " tiene un precio de " + producto.precio + "€");
                }
            }
            reject("El producto que buscas no está en la lista");
        }
    });
}

// Función principal que se llama desde el botón
function buscarProducto() {
    
    const input = document.getElementById('inputProducto');
    const salida = document.getElementById('resultado');
    const nombre = input.value.trim();

    // Llamamos a la promesa
    buscarEnArray(nombre)
        .then(function(mensaje) {
            // Si encuentra el producto
            salida.innerHTML = "<h3>" + mensaje + "</h3>";
            document.getElementById('error').textContent = "";
        })
        .catch(function(error) {
            // Si no lo encuentra
            salida.innerHTML = "";
            document.getElementById('error').textContent = error;
        });

    // Limpiamos el input
    input.value = "";
}
