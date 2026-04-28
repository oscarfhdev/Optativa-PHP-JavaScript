<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2</title>
</head>

<body>
  
    <form action="ejercicio2.php" method="POST">
        <label for="numero">Introduce el número para calcular su factorial:</label>
        <input type="text" name="numero" id="numero" required>
        <br>
        <input type="submit" value="Enviar">
    </form>

    <?php
        if(isset($_POST['numero'])){
            $numero = $_POST['numero'];

            echo factorial($numero);
        }

        function factorial($n) {
            if ($n == 1 || $n == 0) { // Caso base
                return 1;
            } else {
                return $n * factorial($n - 1); // Caso recursivo
            }
        }
    ?>

    

</body>
</html>