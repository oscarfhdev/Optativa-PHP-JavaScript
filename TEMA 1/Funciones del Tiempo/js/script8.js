listaBanners=["../images/banner1.png","../images/banner2.jpg","../images/banner3.jpg", "../images/banner4.jpg"]
indice=0;

function cambiarBanner(){
    imagen=document.getElementById("banner");

    if(indice==2){
        indice=0;
        imagen.src=listaBanners[indice];
    }
    else{
        indice++;
        imagen.src=listaBanners[indice];
    }
}