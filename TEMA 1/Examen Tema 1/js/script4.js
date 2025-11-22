const pCronometro = document.getElementById('cronometro');
let contador = 0;
let semaforo="";

function arrancarCronometro(){
    
    pCronometro.textContent = ++contador;

    if(contador == 100){
        clearInterval(semaforo);
    }
}

function iniciar(){
    semaforo = setInterval(arrancarCronometro, 1000);
}

function pararCronometro(){ 
    clearInterval(semaforo);
}



function retrocederCronometro(){
    clearInterval(semaforo);
    semaforo = setInterval(invertirCronometro, 1000);
}

function invertirCronometro(){
    if(contador == 1 || contador == 0){
        clearInterval(semaforo);
    }

    pCronometro.textContent = --contador;
}

