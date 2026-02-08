// Funciones callback para las operaciones matemáticas
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    // Controlamos la división por 0
    if (b === 0) {
        return "Error: División por 0";
    }
    return a / b;
}

// Función principal que recibe un callback y el nombre de la operación
function ejecutarOperacion(callback, nombreOperacion) {
    // Obtenemos los valores de los inputs
    const inputNumero1 = document.getElementById('numero1');
    const inputNumero2 = document.getElementById('numero2');

    let numero1 = Number(inputNumero1.value);
    let numero2 = Number(inputNumero2.value);

    // Comprobamos que los valores sean válidos
    if (inputNumero1.value != "" && inputNumero2.value != "") {
        // Limpiamos el error si lo hubiera
        document.getElementById('error').textContent = "";

        // Ejecutamos la operación usando el callback
        let resultado = callback(numero1, numero2);

        // Añadimos el resultado a la tabla
        agregarFilaTabla(nombreOperacion, numero1, numero2, resultado);

        // Limpiamos los inputs
        inputNumero1.value = "";
        inputNumero2.value = "";

    } else {
        // Si falta algún número mostramos error
        document.getElementById('error').textContent = "Por favor, introduce los dos números.";
    }
}

// Función auxiliar para añadir una fila a la tabla
function agregarFilaTabla(operacion, num1, num2, resultado) {
    // Obtenemos la tabla
    let tabla = document.getElementById('tablaResultados');

    // Creamos una nueva fila
    let fila = document.createElement('tr');

    // Creamos las celdas
    let tdOperacion = document.createElement('td');
    tdOperacion.textContent = operacion;

    let tdNum1 = document.createElement('td');
    tdNum1.textContent = num1;

    let tdNum2 = document.createElement('td');
    tdNum2.textContent = num2;

    let tdResultado = document.createElement('td');
    tdResultado.textContent = resultado;

    // Añadimos las celdas a la fila
    fila.appendChild(tdOperacion);
    fila.appendChild(tdNum1);
    fila.appendChild(tdNum2);
    fila.appendChild(tdResultado);

    // Añadimos la fila a la tabla
    tabla.appendChild(fila);
}
