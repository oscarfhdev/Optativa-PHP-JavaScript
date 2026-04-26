<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style.css">
    <title>Ejercicio 1 - Datos Personales</title>
</head>
<body>
    <h1>Ejercicio 1</h1>
    <p>1. Crea una página que pida los datos personales mediante un formulario (Nombre y apellidos, Teléfono, DNI) y compruebe si son correctos.</p>

    <!-- Formulario que envía los datos por POST -->
    <form action="ejercicio1.php" method="POST">
        <label for="nombre">Nombre y apellidos:</label><br>
        <input type="text" name="nombre" id="nombre" placeholder="Introduce nombre" required><br><br>

        <label for="telefono">Teléfono:</label><br>
        <input type="text" name="telefono" id="telefono" placeholder="Ej: 600123456" required><br><br>

        <label for="numDNI">DNI:</label><br>
        <input type="text" name="numDNI" id="numDNI" placeholder="Ej: 12345678A" required><br><br>
        
        <button type="submit">Enviar y Comprobar</button>
        <a href="ejercicio1.php"><button type="button" style="background-color: lightgray; border: 1px solid #aaa;">Limpiar pantalla</button></a>
    </form>
    <br>

    <?php
    // Comprobamos si se han enviado los datos
    if (isset($_POST["numDNI"]) && isset($_POST["nombre"]) && isset($_POST["telefono"])) {
        $nombre = $_POST["nombre"];
        $telefono = $_POST["telefono"];
        $dni = $_POST["numDNI"];

        echo "<div id='resultado'>";

        // Validar nombre (no puede contener números)
        $nombreValido = true;
        for ($i = 0; $i < strlen($nombre); $i++) {
            if (is_numeric($nombre[$i])) {
                $nombreValido = false;
            }
        }
        if ($nombreValido) {
            echo "<p>Nombre correcto: $nombre</p>";
        } else {
            echo "<p id='error'>Nombre incorrecto: no puede contener caracteres numéricos.</p>";
        }

        // Validar teléfono (9 cifras o empezar por prefijo +XX y espacio y 9 cifras)
        $telefonoValido = false;
        if (strlen($telefono) == 9 && is_numeric($telefono)) {
            $telefonoValido = true;
        } else if (strlen($telefono) == 13 && $telefono[0] == '+' && $telefono[3] == ' ' && is_numeric(substr($telefono, 4))) {
            $telefonoValido = true;
        }

        if ($telefonoValido) {
            echo "<p>Teléfono correcto: $telefono</p>";
        } else {
            echo "<p id='error'>Teléfono incorrecto: debe tener 9 cifras o empezar por +XX seguido de un espacio y 9 cifras.</p>";
        }

        // Validar DNI
        $letras = array("T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E");
        
        // Extraemos la letra y los números
        $letraDNI = strtoupper(substr($dni, -1)); // Último carácter y a mayúscula
        $numerosDNI = substr($dni, 0, -1); // Todo menos el último carácter

        if (strlen($numerosDNI) == 8 && is_numeric($numerosDNI)) {
            $moduloDNI = ((int)$numerosDNI) % 23;
            $letraCorrecta = $letras[$moduloDNI];

            if ($letraDNI == $letraCorrecta) {
                echo "<p>DNI válido. La letra '$letraDNI' corresponde con el número.</p>";
            } else {
                echo "<p id='error'>DNI inválido. Letra incorrecta. La letra correcta sería '$letraCorrecta'.</p>";
            }
        } else {
            echo "<p id='error'>DNI inválido. El formato debe ser 8 números seguidos de una letra.</p>";
        }

        echo "</div>";
    }
    ?>
</body>
</html>
