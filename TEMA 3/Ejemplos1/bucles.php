<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>
<body>

    <?php 
        //Lógica para definir la pestaña activa
        $tab = isset($_GET['tab']) ? $_GET['tab'] : 'While_1';

        //Navegación (Enlaces)
        echo '<ul class="tabs">';
        echo '<li><a href="?tab=While_1" class="'.($tab == 'While_1' ? 'active' : '').'">While 1</a></li>';
        echo '<li><a href="?tab=While_2" class="'.($tab == 'While_2' ? 'active' : '').'">While 2</a></li>';
        echo '<li><a href="?tab=DoWhile" class="'.($tab == 'DoWhile' ? 'active' : '').'">Do While </a></li>';
        echo '<li><a href="?tab=For1" class="'.($tab == 'For1' ? 'active' : '').'">For 1 </a></li>';
        echo '<li><a href="?tab=For2" class="'.($tab == 'For2' ? 'active' : '').'">For 2 </a></li>';
        echo '</ul>';

        //Contenido
        echo '<div class="tab-content">';
        switch($tab){
            case 'While_1':

                //Bucle while 1
                $i=1;
                while($i<10){
                    echo "While 1, i vale ". $i."<br>";
                    $i++;
                }
                break;

            case 'While_2':

                //Bucle while 2
                $i=1;
                while($i<10):
                    echo "While 2, i vale ". $i."<br>";
                    $i++;
                endwhile;
                break;

            case 'DoWhile':

                //Bucle do while 1
                $i=1;
                do{
                    echo "Do while 1, i vale ". $i."<br>";
                    $i++;
                } while($i<10);
                break;

            case 'For1':

                //Bucle for 1
                for($i=1; $i<10 ; $i++){
                    echo "Bucle for 1, i vale ". $i."<br>";
                }
                break;

            case 'For2':

                //Bucle for 2
                for($i=1; $i<10 ; $i++):
                    echo "Bucle for 2, i vale ". $i."<br>";
                endfor;
                break;
        }

        echo '</div>'; 

    ?>
    
</body>
</html>