<?php
// Texto fijo elegido por el alumno
$texto = "El ciclo formativo de Desarrollo de Aplicaciones Multiplataforma (DAM) es un Grado Superior de FP en España (2 años) enfocado en crear software para diversos dispositivos (móvil, PC, web). Se especializa en lenguajes como Java, Python o Kotlin y entornos .NET, ideal para quienes buscan crear apps móviles y de escritorio. ";

// Función que cuenta cuántas veces aparece una palabra en el texto
function contarPalabra($texto, $palabraBuscada) {
    // Quitamos los puntos y comas del texto para que no molesten
    $signos = array(".", ",", ";", ":");
    $textoLimpio = str_replace($signos, "", $texto);

    // Dividimos el texto en palabras con explode
    $palabras = explode(" ", $textoLimpio);

    // Recorremos las palabras y contamos las coincidencias
    $contador = 0;
    foreach ($palabras as $palabra) {
        if (strtolower($palabra) == strtolower($palabraBuscada)) {
            $contador++;
        }
    }

    return $contador;
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style.css">
    <title>Ejercicio 3 - Contar Palabra</title>
</head>
<body>
    <h1>Ejercicio 3</h1>
    <p>3 - Muestra un texto por pantalla, después crea un formulario que reciba una palabra, crea una función que cuente cuántas veces aparece la palabra en el texto.</p>

    <!-- Mostramos el texto fijo -->
    <div id="resultado">
        <p><?= $texto ?></p>
    </div>

    <!-- Formulario para introducir la palabra a buscar -->
    <form method="POST">
        <input type="text" name="palabra" placeholder="Escribe una palabra" required>
        <button type="submit">Buscar</button>
    </form>

    <?php
    // Comprobamos si se envió el formulario
    if (isset($_POST["palabra"]) && $_POST["palabra"] != "") {
        $palabra = $_POST["palabra"];

        // Llamamos a la función y mostramos el resultado
        $veces = contarPalabra($texto, $palabra);
        echo "<div id='resultado'><p>La palabra '$palabra' aparece $veces veces en el texto.</p></div>";
    }
    ?>
</body>
</html>
