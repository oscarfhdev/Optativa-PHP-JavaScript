<?php
// 1. Definimos las rutas de las imágenes 
$img0 = "./images/axel_blaze.jpg";
$img1 = "./images/shawn_frost.png";

// 2. Generamos un número aleatorio entre 0 y 1 incluidos
$numeroAleatorio = rand(0, 1);

// 3. Con el if seleccionamos una foto u otra dependiendo del número
if ($numeroAleatorio == 0) {
    $seleccionada = $img0;
} else {
    $seleccionada = $img1;
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style.css">
    <title>Ejercicio 1 - Aleatorio</title>
</head>
<body>
    <h1>Ejercicio 1</h1>
    <p>1 - Descarga dos imágenes de internet, genera un numero aleatorio entre 0 y 1, dependiendo del número que se genere haz que se muestre una imagen u otra.</p>

    <!-- Este button refresca la página -->
    <button onclick="location.reload()">Probar de nuevo</button>

    <div id="resultado">        
        <!--  Aquí metemos en el source la url a la imagen seleccionada aleatoriamente -->
        <img src="<?= $seleccionada ?>" alt="Jugador aleatorio" style="max-width: 300px; border-radius: 1vh;">
    </div>
</body>
</html>