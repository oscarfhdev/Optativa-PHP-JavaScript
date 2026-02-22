// Variables del cronómetro, las leemos del localStorage por si ya había algo guardado
let tiempoAcumulado = parseInt(localStorage.getItem("chrono_acumulado")) || 0;
let tiempoInicio = parseInt(localStorage.getItem("chrono_inicio")) || 0;
let corriendo = localStorage.getItem("chrono_corriendo") === "true";

// Variable para guardar el setInterval y poder pararlo después
let intervaloReloj;

// Muestra el tiempo actual en formato HH:MM:SS en el h1
function actualizarPantalla() {
    // Calculamos el tiempo total, si está corriendo sumamos lo que lleva desde que se dio al play
    let tiempoActual = tiempoAcumulado;

    if (corriendo && tiempoInicio > 0) {
        tiempoActual += Date.now() - tiempoInicio;
    }

    // Pasamos de milisegundos a horas, minutos y segundos
    const segundosTotales = Math.floor(tiempoActual / 1000);
    const horas = Math.floor(segundosTotales / 3600);
    const minutos = Math.floor((segundosTotales % 3600) / 60);
    const segundos = segundosTotales % 60;

    // padStart para ponerle el 0 delante si hace falta (ej: 01:05:08)
    const horaTexto = `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
    document.getElementById("tiempoDisplay").textContent = horaTexto;
}

// Inicia o reanuda el cronómetro
function iniciarCronometro() {
    if (!corriendo) {
        corriendo = true;
        tiempoInicio = Date.now(); // Marcamos cuándo empieza a correr

        // Guardamos el estado en localStorage
        localStorage.setItem("chrono_corriendo", "true");
        localStorage.setItem("chrono_inicio", tiempoInicio.toString());

        // Actualizamos la pantalla cada medio segundo
        intervaloReloj = setInterval(actualizarPantalla, 500);
    }
}

// Para el cronómetro y guarda lo que llevaba acumulado
function pararCronometro() {
    if (corriendo) {
        corriendo = false;

        // Sumamos el tiempo que ha pasado desde el último inicio
        tiempoAcumulado += Date.now() - tiempoInicio;

        // Guardamos todo en localStorage
        localStorage.setItem("chrono_corriendo", "false");
        localStorage.setItem("chrono_acumulado", tiempoAcumulado.toString());

        clearInterval(intervaloReloj);
        actualizarPantalla();
    }
}

// Resetea todo a cero y limpia el localStorage
function borrarCronometro() {
    corriendo = false;
    tiempoAcumulado = 0;
    tiempoInicio = 0;

    localStorage.removeItem("chrono_corriendo");
    localStorage.removeItem("chrono_acumulado");
    localStorage.removeItem("chrono_inicio");

    clearInterval(intervaloReloj);
    actualizarPantalla();
}

// Al cargar la página restauramos el estado visual del cronómetro
document.addEventListener("DOMContentLoaded", () => {
    actualizarPantalla();
    if (corriendo) {
        // Si estaba corriendo cuando se cerró la pestaña, lo volvemos a arrancar
        intervaloReloj = setInterval(actualizarPantalla, 500);
    }
});
