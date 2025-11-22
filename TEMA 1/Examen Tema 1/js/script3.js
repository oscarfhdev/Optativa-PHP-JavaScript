let arrayImagenes = ["./images/banner1.png", "./images/banner2.jpg ", "./images/banner3.jpg", "./images/banner4.jpg", "./images/goku.gif",  "./images/img2.jpg",  "./images/img3.jpg", "./images/semaforo_amarillo.png", "./images/semaforo_rojo.png", "./images/semaforo_verde.png"];
let arrayTexto = ["textoImagen1","textoImagen2","textoImagen3","textoImagen4","textoImagen5","textoImagen6","textoImagen7","textoImagen8","textoImagen9","textoImagen10",];

function cambiarImagenes(){
    let numeroRandom = Math.floor(Math.random() * 10);
    const imagenAleatoria = document.getElementById("imagenAleatoria");
    const pFraseAleatoria = document.getElementById("fraseAleatoria");

    imagenAleatoria.src = arrayImagenes[numeroRandom];
    pFraseAleatoria.textContent = arrayTexto[numeroRandom];
}