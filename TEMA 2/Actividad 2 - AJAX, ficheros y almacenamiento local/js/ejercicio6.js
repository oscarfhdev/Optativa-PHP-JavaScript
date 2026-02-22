// Al cargar la página comprobamos si hay un tema guardado en localStorage
document.addEventListener("DOMContentLoaded", () => {
    const temaGuardado = localStorage.getItem("temaPreferido");

    // Cogemos el select y el body para poder cambiarles la clase
    const selectorDesplegable = document.getElementById("selectorTema");
    const cuerpo = document.getElementById("cuerpoPagina");

    if (temaGuardado) {
        // Si había algo guardado, se lo ponemos al body y al select
        cuerpo.className = temaGuardado;
        selectorDesplegable.value = temaGuardado;
    } else {
        // Si no hay nada guardado dejamos el tema claro por defecto
        cuerpo.className = "tema-claro";
        selectorDesplegable.value = "tema-claro";
    }
});

// Función que se ejecuta cuando el usuario cambia el select
function cambiarTema() {
    // Leemos qué opción ha elegido
    const temaElegido = document.getElementById("selectorTema").value;

    // Cambiamos la clase del body para que se apliquen los estilos del tema
    document.getElementById("cuerpoPagina").className = temaElegido;

    // Guardamos la elección en localStorage para que se mantenga al recargar
    localStorage.setItem("temaPreferido", temaElegido);
}
