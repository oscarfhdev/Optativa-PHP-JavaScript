// Función auxiliar para añadir un mensaje al div de resultado
function mostrarMensaje(mensaje) {
    let divResultado = document.getElementById('resultado');
    let p = document.createElement('p');
    p.textContent = mensaje;
    divResultado.appendChild(p);
}

// Primera promesa: simula obtener datos de un usuario
function obtenerUsuario() {
    return new Promise(function(resolve, reject) {
        mostrarMensaje("Promesa 1: Obteniendo datos del usuario...");
        
        setTimeout(function() {
            let usuario = {
                nombre: "Oscar",
                edad: 22
            };
            resolve(usuario);
        }, 1000);
    });
}

// Segunda promesa: simula obtener los pedidos del usuario
function obtenerPedidos(usuario) {
    return new Promise(function(resolve, reject) {
        mostrarMensaje("Promesa 2: Obteniendo pedidos de " + usuario.nombre + "...");
        
        setTimeout(function() {
            let pedidos = ["Pedido #1: Laptop", "Pedido #2: Teclado", "Pedido #3: Ratón"];
            resolve({
                usuario: usuario,
                pedidos: pedidos
            });
        }, 1000);
    });
}

// Tercera promesa: simula procesar los pedidos
function procesarPedidos(datos) {
    return new Promise(function(resolve, reject) {
        mostrarMensaje("Promesa 3: Procesando " + datos.pedidos.length + " pedidos...");
        
        setTimeout(function() {
            let resumen = "Resumen: " + datos.usuario.nombre + " tiene " + datos.pedidos.length + " pedidos.";
            resolve(resumen);
        }, 1000);
    });
}

// Función principal que encadena las promesas
function ejecutarPromesasEncadenadas() {
    // Limpiamos el resultado anterior
    document.getElementById('resultado').innerHTML = '';
    
    mostrarMensaje("Iniciando cadena de promesas...");

    // Encadenamos las 3 promesas con .then()
    obtenerUsuario()
        .then(function(usuario) {
            // La primera promesa nos devuelve el usuario
            mostrarMensaje(" Usuario obtenido: " + usuario.nombre);
            // Devolvemos la siguiente promesa para encadenar
            return obtenerPedidos(usuario);
        })
        .then(function(datos) {
            // La segunda promesa nos devuelve usuario + pedidos
            mostrarMensaje("Pedidos obtenidos: " + datos.pedidos.length + " pedidos");
            // Devolvemos la siguiente promesa para encadenar
            return procesarPedidos(datos);
        })
        .then(function(resumen) {
            // La tercera promesa nos devuelve el resumen final
            let h3 = document.createElement('h3');
            h3.textContent = "✓ " + resumen;
            document.getElementById('resultado').appendChild(h3);
        })
        .catch(function(error) {
            // Si alguna promesa falla, capturamos el error
            mostrarMensaje("Error: " + error);
        });
}
