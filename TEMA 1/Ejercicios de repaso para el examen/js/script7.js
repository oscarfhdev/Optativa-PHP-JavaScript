let contadorSegundos = 1; // Variable global para ir acutalizando

// Esta función se llama cada segundo automáticamente al entrar al documento, y cada segundo
function crearTabla(){
  contadorSegundos++ // Incrementamos cada segundo

  // Obtenemos el div donde tenemos que ingresar las tablas
  const divResultado = document.getElementById("resultado");

  // Comprobamos que lo hace cada 5 segundos, si el resto /5 es o es múltiplo
  if(contadorSegundos % 5 == 0){
    console.log(contadorSegundos)

    // Creamos nuestro elemento tabla
    const tabla = document.createElement("table")

    // Tenemos un bucle para construir nuestra columna con el número de filas (contadorSegundos)
    for (let i = 1; i <= contadorSegundos; i++) {
      const tr = document.createElement("tr")
      const td = document.createElement("td")
      td.textContent = i; // Le ponemos un número para más contexto

      tr.append(td); //A la fila le añadimos la celda
      tabla.append(tr); // A la tabla le añadimos la fila
    }

    // A nuestro div de resultado le metemos la tabla
    divResultado.append(tabla);
    divResultado.append(document.createElement("br")) // Añadimos un espacio para más claridad
  }
}