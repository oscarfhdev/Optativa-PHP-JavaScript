<?php
// Cadena original
$cadenaConEspacios = "Hola me llamo Oscar y esto es una prueba";
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style.css">
    <title>Ejercicio 5 - Sin Espacios</title>
</head>
<body>
    <h1>Ejercicio 5</h1>
    <p>5 - Crea un módulo PHP que reciba una cadena con espacios y te devuelva la cadena sin espacios.</p>

    <div id="resultado">
        <?php
        // Mostramos la cadena original
        echo "<p>Original: '$cadenaConEspacios'</p>";
        
        // str_replace busca los espacios y los sustituye por lo que le digamos, en este caso nada
        $cadenaSinEspacios = str_replace(" ", "", $cadenaConEspacios);
        
        // Mostramos la cadena sin espacios
        echo "<p>Sin espacios: '$cadenaSinEspacios'</p>";
        ?>
    </div>

    <br>
    <!-- Este button refresca la página -->
    <button onclick="location.reload()">Probar de nuevo</button>
</body>
</html>
