<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style.css">
    <title>Ejercicio 4 - Array de Productos</title>
</head>
<body>
    <h1>Ejercicio 4</h1>
    <p>4. Crea un array asociativo de productos (Nombre -> coste). Crea varios formularios para añadir, borrar o consultar un producto del array. Si se recarga la página, el array vuelve a su valor original.</p>
        
    <?php 
        // Lógica para definir la pestaña activa, por defecto 'insertar'
        $tab = isset($_GET['tab']) ? $_GET['tab'] : 'insertar';

        // Navegación mediante pestañas
        echo '<nav><ul>';
        echo '<li><a href="?tab=insertar" class="'.($tab == 'insertar' ? 'active' : '').'">Añadir</a></li>';
        echo '<li><a href="?tab=borrado" class="'.($tab == 'borrado' ? 'active' : '').'">Borrar</a></li>';
        echo '<li><a href="?tab=consulta" class="'.($tab == 'consulta' ? 'active' : '').'">Consultar</a></li>';
        echo '</ul></nav>';

        // Array inicial de productos. 
        // Al recargar la página siempre volverá a este valor original según el enunciado.
        $productos = array("PC" => 2200, "Raton" => 20, "Teclado" => 30);

        echo '<div class="tab-content" id="resultado">';
        
        switch($tab){
            case 'insertar':
                ?>
                <h3>Añadir Producto</h3>
                <form action="?tab=insertar" method="POST">
                    <label for="productoInsertar">Nombre del producto:</label><br>
                    <input type="text" name="productoInsertar" required><br><br>
                    <label for="precioInsertar">Coste del producto (€):</label><br>
                    <input type="number" name="precioInsertar" step="any" required><br><br>
                    <button type="submit">Añadir</button>
                </form>
                <br>
                <?php
                if(isset($_POST["productoInsertar"]) && isset($_POST["precioInsertar"])){
                    $nombre = $_POST["productoInsertar"];
                    $precio = $_POST["precioInsertar"];

                    // Comprobamos si el producto ya existe ignorando mayuusculas
                    $existe = false;
                    foreach ($productos as $nombreV => $precioV) {
                        if (strtolower($nombreV) == strtolower($nombre)) {
                            $existe = true;
                        }
                    }

                    if ($existe) {
                        echo "<p id='error'>Error: El producto '$nombre' ya existe en el array.</p>";
                    } else {
                        // Añadirlo al array local
                        $productos[$nombre] = $precio;
                        echo "<p>Producto '$nombre' añadido correctamente.</p>";
                    }
                }      
                break;

            case 'borrado':
                ?>
                <h3>Borrar Producto</h3>
                <form action="?tab=borrado" method="POST">
                    <label for="productoBorrar">Nombre del producto a borrar:</label><br>
                    <input type="text" name="productoBorrar" required><br><br>
                    <button type="submit">Borrar</button>
                </form>
                <br>
                <?php
                if(isset($_POST["productoBorrar"])){
                    $nombre = $_POST["productoBorrar"];
                    
                    // Comprobar si existe para borrarlo
                    $claveReal = "";
                    $existe = false;
                    foreach ($productos as $nombreV => $precioV) {
                        if (strtolower($nombreV) == strtolower($nombre)) {
                            $existe = true;
                            $claveReal = $nombreV; // Guardamos la clave exacta (con mayúsculas/minúsculas originales)
                        }
                    }

                    if($existe){
                        unset($productos[$claveReal]);
                        echo "<p>El producto '$claveReal' ha sido borrado.</p>";
                    } else {
                        echo "<p id='error'>Error: El producto '$nombre' que intentas borrar no existe.</p>";
                    }
                }
                break;

            case 'consulta':
                ?>   
                <h3>Consultar Producto</h3>
                <form action="?tab=consulta" method="POST">
                    <label for="productoConsulta">Nombre del producto a consultar:</label><br>
                    <input type="text" name="productoConsulta" required><br><br>
                    <button type="submit">Consultar</button>
                </form>
                <br>
                <?php
                if(isset($_POST["productoConsulta"])){
                    $nombre = $_POST["productoConsulta"];
                    
                    $existe = false;
                    $claveReal = "";
                    foreach ($productos as $nombreV => $precioV) {
                        if (strtolower($nombreV) == strtolower($nombre)) {
                            $existe = true;
                            $claveReal = $nombreV;
                        }
                    }

                    if($existe){
                        echo "<p>El producto <strong>$claveReal</strong> existe y tiene un coste de <strong>".$productos[$claveReal]." €</strong></p>";
                    } else {
                        echo "<p id='error'>Error: El producto '$nombre' que intentas consultar no existe.</p>";
                    }
                }
                break;
        }

        // Mostrar siempre el array actualizado
        echo "<hr>";
        echo "<h4>Listado actual de productos:</h4>";
        if (count($productos) > 0) {
            echo "<ul>";
            foreach ($productos as $nombreProd => $precioProd) {
                echo "<li><strong>$nombreProd</strong>: $precioProd €</li>";
            }
            echo "</ul>";
        } else {
            echo "<p>El array está vacío.</p>";
        }

        echo '</div>';
    ?>
</body>
</html>
