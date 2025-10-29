// Creamos las variables fuera de la función
const listaBanners =["./images/banner1.png","./images/banner2.jpg","./images/banner3.jpg", "./images/banner4.jpg"] // Array con ruta a las imágenes
let indice = 0;

function cambiarBanner(){
    imagen=document.getElementById("banner"); // Obtenemos el banner por id

    // Si llega al final se reinicia
    if(indice==3){
        indice=0;
        imagen.src=listaBanners[indice];
    }
    else{ // Sino sigue aumentando hasta que llegue al final
        indice++;
        imagen.src=listaBanners[indice];
    }
}