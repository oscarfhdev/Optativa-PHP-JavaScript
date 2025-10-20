function comprobarInputs() {
    const inputs = document.querySelectorAll('.campo'); 

    inputs.forEach(input => {
        if (input.value === "" || !isNaN(input.value)) {
            input.style.backgroundColor = "red";
        }
        else{
            input.style.backgroundColor = "lightcyan"
        }
    });
}