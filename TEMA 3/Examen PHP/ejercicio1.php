<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 1</title>
</head>

<body>
  
    <form action="ejercicio1.php" method="POST">
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" id="nombre" required>
        <br>
        <label for="telefono">Teléfono:</label>
        <input type="text" name="telefono" id="telefono" required>
        <br>
        <label for="edad">Edad:</label>
        <input type="text" name="edad" id="edad" required>
        <br>
        <input type="submit" value="Enviar">
    </form>

    <?php
        if($_SERVER["REQUEST_METHOD"] == "POST"){
            $nombre = $_POST["nombre"];
            $telefono = $_POST["telefono"];
            $edad = $_POST["edad"];

            //Validar nombre
            if(preg_match('/\d/', $nombre)){
                echo "El nombre no puede contener caracteres numéricos. <br>";
            }else{
                echo "Nombre válido <br>";
            }
            // Validar teléfono
            if(!preg_match('/^(\+\d{2} )?\d{9}$/', $telefono)){
                echo "El teléfono debe tener 9 cifras o empezar por un prefijo +XX seguido de un espacio y 9 cifras. <br>";
            }else{
                echo "Teléfono válido <br>";
            }

            
            if(is_numeric($edad)){
                if($edad < 5 || $edad > 105){
                    echo "La edad está fuera del rango válido <br>";
                }else{
                echo "edad válida <br>";
            }
            } else {
                echo "La edad debe de ser un número entero <br>";
            }

        }

    ?>

    

</body>
</html>