function cambiarImg(){
    const imagen1 = document.getElementById('img1');
    const imagen2 = document.getElementById('img2');

    if(imagen1.src.includes("1.jpg")){
        imagen1.src = "./img/2.jpg";
        imagen2.src = "./img/1.jpg";
    }
    else{
        imagen2.src = "./img/2.jpg";
        imagen1.src = "./img/1.jpg";
    }
}