<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style.css">
    <title>Ejercicio 3 - Factorial Recursivo</title>
</head>
<body>
    <h1>Ejercicio 3</h1>
    <p>3. Crea una función recursiva que reciba un número y devuelva su factorial.</p>

    <!-- Formulario para pedir el número -->
    <form method="POST" action="ejercicio3.php">
        <label for="numero">Introduce un número para calcular su factorial:</label><br><br>
        <input type="number" name="numero" id="numero" min="1" placeholder="Ej: 5" required>
        <button type="submit">Calcular Factorial</button>
        <a href="ejercicio3.php"><button type="button" style="background-color: lightgray; border: 1px solid #aaa;">Limpiar pantalla</button></a>
    </form>
    <br>

    <?php
        // Función recursiva que calcula el factorial
        function factorial($num) {
            // Caso base: el factorial de 1 (o 0) es 1
            if($num <= 1){
                return 1;
            }else {
                // Llamada recursiva multiplicando por el factorial del anterior
                return $num * factorial($num - 1);
            }
        }

        // Comprobamos si se ha enviado el formulario
        if (isset($_POST["numero"]) && is_numeric($_POST["numero"])) {
            $numero = (int) $_POST["numero"];
            
            if ($numero < 0) {
                echo "<div id='resultado'><p id='error'>El factorial no está definido para números negativos.</p></div>";
            } else {
                $resultado = factorial($numero);
                echo "<div id='resultado'><p>El factorial de $numero (es decir, $numero!) es: <strong>$resultado</strong></p></div>";
            }
        }
    ?>
</body>
</html>
