function cambiarTamano() {
    const v1 = parseInt(document.getElementById('valor1').value);
    const v2 = parseInt(document.getElementById('valor2').value);

    const img = document.getElementById('img1');

    img.style.width = v1 + "px" ;
    img.style.height = v2 + "px";
}