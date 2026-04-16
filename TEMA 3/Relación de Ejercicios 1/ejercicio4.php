<?php
// Generamos un numero aleatorio entre 1- 7, y el 8 para el caso por defecto
$diaDeLaSemana = rand(1, 8);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style.css">
    <title>Ejercicio 4 - Calendario</title>
</head>
<body>
    <h1>Ejercicio 4</h1>
    <p>4 - Crea un módulo PHP, que, dependiendo del día de la semana, imprima tu calendario, (la opción default imprimirá todos los días de la semana).</p>

    <table>
        <?php
        // Seleccionamos el día de la semana con un switch
        switch ($diaDeLaSemana) {
            case 1:
                echo "<tr><td>Lunes: Programación PHP y JS</td></tr>";
                break;
            case 2:
                echo "<tr><td>Martes: Desarrollo de Interfaces </td></tr>";
                break;
            case 3:
                echo "<tr><td>Miércoles: Programación de Servicios y Procesos</td></tr>";
                break;
            case 4:
                echo "<tr><td>Jueves: Sistemas de Gestión Empresarial</td></tr>";
                break;
            case 5:
                echo "<tr><td>Viernes: Formación y Orientación Laboral</td></tr>";
                break;
            case 6:
                echo "<tr><td>Sábado: Programación Multimedia y Dispositivos Móviles</td></tr>";
                break;
            case 7:
                echo "<tr><td>Domingo: Proyecto Final</td></tr>";
                break;
            default:
                // Por defecto mostramos el horario de toda la semana
                echo "<tr><td>Lunes: Programación PHP y JS</td></tr>";
                echo "<tr><td>Martes: Desarrollo de Interfaces</td></tr>";
                echo "<tr><td>Miércoles: Programación de Servicios y Procesos</td></tr>";
                echo "<tr><td>Jueves: Sistemas de Gestión Empresarial</td></tr>";
                echo "<tr><td>Viernes: Formación y Orientación Laboral</td></tr>";
                echo "<tr><td>Sábado: Programación Multimedia y Dispositivos Móviles</td></tr>";
                echo "<tr><td>Domingo: Proyecto Final</td></tr>";
                break;
        }
        ?>
    </table>

    <br>
    <!-- Este button refresca la página -->
    <button onclick="location.reload()">Probar de nuevo</button>
</body>
</html>
