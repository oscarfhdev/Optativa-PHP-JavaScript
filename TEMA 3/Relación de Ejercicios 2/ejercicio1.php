<?php
// Función que comprueba si una cadena es un palíndromo
function esPalindromo($cadena) {
    // Quitamos los espacios y pasamos a minúsculas
    $cadenaLimpia = str_replace(" ", "", strtolower($cadena));

    // Invertimos la cadena
    $cadenaAlReves = strrev($cadenaLimpia);

    // Comparamos: si son iguales es palíndromo
    if ($cadenaLimpia == $cadenaAlReves) {
        return true;
    }
    return false;
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style.css">
    <title>Ejercicio 1 - Palíndromo</title>
</head>
<body>
    <h1>Ejercicio 1</h1>
    <p>1 - Crea un formulario que lea una cadena de caracteres, después crea una función para comprobar si la cadena es un palíndromo (se lee igual en ambos sentidos, por ejemplo, Ana o Acaso hubo búhos aca) o no.</p>

    <!-- Formulario que envía la cadena por POST -->
    <form method="POST">
        <input type="text" name="cadena" placeholder="Escribe una cadena" required>
        <button type="submit">Comprobar</button>
    </form>

    <?php
    // Comprobamos si se ha enviado el formulario
    if (isset($_POST["cadena"]) && $_POST["cadena"] != "") {
        $cadena = $_POST["cadena"];

        if (esPalindromo($cadena)) {
            echo "<div id='resultado'><p>'$cadena' SÍ es un palíndromo.</p></div>";
        } else {
            echo "<div id='resultado'><p>'$cadena' NO es un palíndromo.</p></div>";
        }
    }
    ?>
</body>
</html>
