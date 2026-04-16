<?php
// Generamos un número aleatorio entre 0 y 255 para cada color RGB
$numeroRojo = rand(0, 255);
$numeroVerde = rand(0, 255);
$numeroAzul = rand(0, 255);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style.css">
    <title>Ejercicio 2 - Fondo aleatorio</title>
</head>

<!-- // Debemos de meter las variables en el rgb, cada uno en orden -->
<body style="background-color: rgb(<?= $numeroRojo ?>, <?= $numeroVerde ?>, <?= $numeroAzul ?>)">   
    
    <h1>Ejercicio 2</h1>
    <p>2 - Crea una página que tenga un fondo de pantalla aleatorio, genera tres números aleatorios (rojo, azul y verde), después establece el color del fondo de pantalla con los valores elegidos.</p>

    <br>
    <!-- Este button refresca la página -->
    <button onclick="location.reload()">Probar de nuevo</button>
</body>
</html>