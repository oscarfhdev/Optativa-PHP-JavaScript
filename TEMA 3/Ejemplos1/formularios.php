<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        print_r ($_GET);

        echo "<br> Su nombre es: ". $_GET["nombre"]. " y sus apellidos: ". $_GET["apellidos"]."<br>";
    ?>

    <a href="formularios.html"><button>Volver</button></a>
    
</body>
</html>