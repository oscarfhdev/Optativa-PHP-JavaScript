let movimiento = true;
listaBanners=["../images/banner1.png","../images/banner2.jpg","../images/banner3.jpg", "../images/banner4.jpg"]
indice=0;

function cambiarBanner(){
    if(movimiento == true){
        imagen=document.getElementById("banner");

        if(indice==3){
            indice=0;
            imagen.src=listaBanners[indice];
        }
        else{
            indice++;
            imagen.src=listaBanners[indice];
        }
    }
}

function pararCarrusel(){
    if(movimiento != false){
        movimiento = false;
        console.log('carrusel parado')
    }
    
}