<?php
// Función recursiva que calcula fibonacci llenando un vector
function fibonacci($limite, &$vector) {
    // Contamos cuántos números llevamos en el vector
    $cantidad = count($vector);

    // Si ya tenemos todos los que necesitamos, paramos
    if ($cantidad == $limite) {
        return;
    }

    // El primero es 0 y el segundo es 1
    if ($cantidad == 0) {
        $vector[] = 0;
    } elseif ($cantidad == 1) {
        $vector[] = 1;
    } else {
        // Los demás son la suma de los dos anteriores
        $ultimo = $vector[$cantidad - 1];
        $penultimo = $vector[$cantidad - 2];
        $vector[] = $ultimo + $penultimo;
    }

    // Llamada recursiva para calcular el siguiente
    fibonacci($limite, $vector);
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style.css">
    <title>Ejercicio 2 - Fibonacci</title>
</head>
<body>
    <h1>Ejercicio 2</h1>
    <p>2 - Crea un formulario que reciba un número, a continuación, crea una función recursiva que calcule el número de Fibonacci hasta dicha posición.</p>

    <!-- Formulario para introducir el número -->
    <form method="POST">
        <input type="number" name="numero" placeholder="Introduce un número" min="0" max="20" required>
        <button type="submit">Calcular</button>
    </form>

    <?php
    // Comprobamos si se envió el formulario
    if (isset($_POST["numero"])) {
        $numero = intval($_POST["numero"]);
        $vector = [];

        // Llamamos a la función recursiva (le sumamos 1 para que incluya la posición)
        fibonacci($numero + 1, $vector);

        // Mostramos la secuencia
        echo "<div id='resultado'>";
        echo "<p>Secuencia de Fibonacci hasta la posición $numero:</p>";
        echo "<p>" . implode(", ", $vector) . "</p>";
        echo "</div>";
    }
    ?>
</body>
</html>
