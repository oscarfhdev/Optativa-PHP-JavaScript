<?php 
// Iniciamos la sesión para poder mantener el número aleatorio y los intentos entre recargas de la página.
session_start(); 
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style.css">
    <title>Ejercicio 2 - Adivinar Número</title>
</head>
<body>
    <h1>Ejercicio 2</h1>
    <p>2. Crea una página que cree un numero aleatorio entre el 00000 y 99999 cuando la página cargue por primera vez, el usuario debe intentar adivinar el numero. Tienes 7 intentos e indica qué posiciones ha adivinado.</p>

    <form action="ejercicio2.php" method="POST">
        <label for="num">Inserta un número entre 00000 y 99999:</label><br><br>
        <input type="text" name="num" id="num" placeholder="Ej: 12345" required>
        <button type="submit">Adivinar</button>
    </form>
    <br>

    <?php 
    // Función para generar un dígito aleatorio del 0 al 9
    function generarDigito() : int {
        return rand(0, 9);
    }
        
    // Generamos el array de 5 números aleatorios SOLO si no existe ya en la sesión
    if (!isset($_SESSION["numerosRandom"])) {
        $_SESSION["numerosRandom"] = array(generarDigito(), generarDigito(), generarDigito(), generarDigito(), generarDigito());
        $_SESSION["intentos"] = 7;
    }

    $numerosRandom = $_SESSION["numerosRandom"];

    // Comprobamos si el usuario ha enviado un número
    if(isset($_POST["num"])){
        $numUsuario = $_POST["num"];
        echo "<div id='resultado'>";

        if(strlen($numUsuario) == 5 && is_numeric($numUsuario)){
            
            $_SESSION["intentos"]--; // Restamos un intento al usuario

            $aciertos = 0;
            $posicionesAcertadas = "";

            // Comprobamos dígito a dígito
            for ($i = 0; $i < 5; $i++) { 
                if ($numUsuario[$i] == $numerosRandom[$i]) {
                    // Sumamos 1 a la posición para que sea amigable para el usuario (1 a 5)
                    $pos = $i + 1; 
                    $posicionesAcertadas .= "Posición $pos acertada (Dígito: ".$numUsuario[$i].")<br>";
                    $aciertos++;
                }
            }

            if ($aciertos == 5) {
                echo "<p>¡ENHORABUENA! Has adivinado el número: " . implode("", $numerosRandom) . "</p>";
                session_destroy(); // Reiniciamos el juego para la próxima
            } else {
                echo "<p>Te quedan " . $_SESSION["intentos"] . " intentos.</p>";
                if ($posicionesAcertadas != "") {
                    echo "<p>$posicionesAcertadas</p>";
                } else {
                    echo "<p id='error'>No has acertado ninguna posición.</p>";
                }

                // Si se acaban los intentos, termina el juego y reiniciamos
                if ($_SESSION["intentos"] <= 0) {
                    echo "<p id='error'>JUEGO TERMINADO. Te has quedado sin intentos. El número correcto era: " . implode("", $numerosRandom) . "</p>";
                    session_destroy();
                }
            }

        } else {
            echo "<p id='error'>Por favor, introduce un número válido de exactamente 5 dígitos.</p>";
        }
        
        echo "</div>";
    }
    ?>
</body>
</html>
