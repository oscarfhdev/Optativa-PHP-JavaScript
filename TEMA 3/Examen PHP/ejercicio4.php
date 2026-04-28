<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 4</title>
</head>
<body>
    <?php
        $productos = array(
            "Manzanas" => 5, 
            "Peras" => 2, 
            "Platanos" => 3
        );

        foreach ($productos as $producto => $precio) {
          echo "<li>$producto: $precio €</li>";
        }

        // 1. Detectar en qué pestaña estamos (por defecto 'consulta')
        $tab = isset($_GET['tab']) ? $_GET['tab'] : 'consulta';

        // 2. Mostrar los enlaces de menú
        echo '<ul>';
        echo '<li><a href="?tab=consulta">Consulta</a></li>';
        echo '<li><a href="?tab=insertar">Insertar</a></li>';
        echo '<li><a href="?tab=borrado">Borrado</a></li>';
        echo '</ul>';

        // 3. Dependiendo de la pestaña, mostrar un formulario y procesar datos
        switch($tab) {
            case 'consulta':
                ?>
                <form method="POST" action="?tab=consulta">
                    <input type="text" name="producto" placeholder="Nombre de la fruta">
                    <input type="submit" value="Consultar">
                </form>
                <?php
                    if (isset($_POST['producto'])) {
                    $nombre = $_POST['producto'];
                    
                    // Forma 1: Usando isset sobre la clave
                    if (isset($productos[$nombre])) {
                        echo "El precio de $nombre es: " . $productos[$nombre] . "€";
                    } else {
                        echo "El producto no existe.";
                    }
            }
                break;
                

            case 'insertar':
                ?>
                <form method="POST" action="?tab=insertar">
                    <input type="text" name="producto" placeholder="Nombre de la fruta">
                    <input type="number" name="precio" placeholder="Precio">
                    <input type="submit" value="Guardar">
                </form>
                <?php
                    if (isset($_POST['producto']) && isset($_POST['precio'])) {
                        $nombre = $_POST['producto'];
                        $precio = $_POST['precio'];

                        if (isset($productos[$nombre])) {
                        echo "El producto ya existe por lo que no se puede añadir";
                    } else {
                         // Inserta o actualiza el valor en el array
                        $productos[$nombre] = $precio;
                        echo "Producto $nombre guardado con precio $precio €.";
                    }
                        
                       
}                break;
                

            case 'borrado':
                ?>
                <form method="POST" action="?tab=borrado">
                    <input type="text" name="producto" placeholder="Nombre de la fruta">
                    <input type="submit" value="Borrar">
                </form>
                <?php
                if (isset($_POST['producto'])) {
                    $nombre = $_POST['producto'];
                    
                    if (isset($productos[$nombre])) {
                        unset($productos[$nombre]); // Elimina la clave y su valor
                        echo "El producto $nombre ha sido borrado.";
                    }
                    else{
                        echo "El producto que intentas borrar no existe";
                    }
                }
                break;
        }
        ?> 
</body>
</html>