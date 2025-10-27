function sumarCampos() {
    const v1 = document.getElementById('valor1').value;
    const v2 = document.getElementById('valor2').value;

    // Convertimos los valores a float
    const suma = parseFloat(v1) + parseFloat(v2);

    alert("La suma es: " + suma);
}