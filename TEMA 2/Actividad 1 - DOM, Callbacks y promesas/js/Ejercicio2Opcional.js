// Función que evalúa una expresión matemática simple sin paréntesis
// Solo maneja números y operadores: +, -, *, /
function evaluarExpresionSimple(expresion) {
    // Primero separamos por + y - (operadores de menor precedencia)
    // pero mantenemos el operador
    let tokens = [];
    let numeroActual = "";
    
    for (let i = 0; i < expresion.length; i++) {
        let char = expresion[i];
        
        if (char === '+' || char === '-') {
            if (numeroActual !== "" || tokens.length > 0) {
                tokens.push(numeroActual);
                tokens.push(char);
                numeroActual = "";
            } else {
                // Es un signo al inicio (número negativo)
                numeroActual += char;
            }
        } else if (char === '*' || char === '/') {
            tokens.push(numeroActual);
            tokens.push(char);
            numeroActual = "";
        } else {
            numeroActual += char;
        }
    }
    tokens.push(numeroActual);
    
    // Primero resolvemos * y /
    let tokensSimplificados = [];
    let i = 0;
    while (i < tokens.length) {
        if (tokens[i] === '*' || tokens[i] === '/') {
            let ultimo = tokensSimplificados.pop();
            let operador = tokens[i];
            let siguiente = tokens[i + 1];
            
            let resultado;
            if (operador === '*') {
                resultado = parseFloat(ultimo) * parseFloat(siguiente);
            } else {
                resultado = parseFloat(ultimo) / parseFloat(siguiente);
            }
            tokensSimplificados.push(resultado.toString());
            i += 2;
        } else {
            tokensSimplificados.push(tokens[i]);
            i++;
        }
    }
    
    // Ahora resolvemos + y -
    let resultado = parseFloat(tokensSimplificados[0]);
    for (let i = 1; i < tokensSimplificados.length; i += 2) {
        let operador = tokensSimplificados[i];
        let siguiente = parseFloat(tokensSimplificados[i + 1]);
        
        if (operador === '+') {
            resultado += siguiente;
        } else if (operador === '-') {
            resultado -= siguiente;
        }
    }
    
    return resultado;
}

// Función que encuentra el paréntesis más interno y lo evalúa
function resolverParentesis(expresion) {
    // Buscamos el último paréntesis de apertura
    let inicio = -1;
    let fin = -1;
    
    for (let i = 0; i < expresion.length; i++) {
        if (expresion[i] === '(') {
            inicio = i;
        } else if (expresion[i] === ')') {
            fin = i;
            break; // Hemos encontrado el primer cierre después del último inicio
        }
    }
    
    // Si no hay paréntesis, devolvemos la expresión tal cual
    if (inicio === -1 && fin === -1) {
        return expresion;
    }
    
    // Extraemos el contenido del paréntesis
    let contenido = expresion.substring(inicio + 1, fin);
    
    // Evaluamos el contenido
    let resultadoParcial = evaluarExpresionSimple(contenido);
    
    // Reemplazamos el paréntesis por su resultado
    let nuevaExpresion = expresion.substring(0, inicio) + resultadoParcial + expresion.substring(fin + 1);
    
    return nuevaExpresion;
}

// Función principal que calcula la expresión completa
function calcularExpresion(expresion) {
    // Quitamos los espacios
    expresion = expresion.replace(/\s/g, '');
    
    // Mientras haya paréntesis, los resolvemos
    while (expresion.includes('(')) {
        expresion = resolverParentesis(expresion);
    }
    
    // Evaluamos la expresión final sin paréntesis
    return evaluarExpresionSimple(expresion);
}

// Función que se llama desde el botón
function calcular() {
    // Obtenemos el input y su valor
    const inputOperacion = document.getElementById('inputOperacion');
    const operacion = inputOperacion.value;
    
    // Comprobamos que no esté vacío
    if (operacion !== "") {
        // Limpiamos el error si lo hubiera
        document.getElementById('error').textContent = "";
        
        try {
            // Calculamos el resultado
            let resultado = calcularExpresion(operacion);
            
            // Mostramos el resultado
            let divResultado = document.getElementById('resultado');
            divResultado.innerHTML = '';
            
            let h3 = document.createElement('h3');
            h3.textContent = operacion + " = " + resultado;
            divResultado.appendChild(h3);
            
        } catch (error) {
            // Si hay un error en la expresión
            document.getElementById('error').textContent = "Error: Expresión no válida.";
        }
        
        // Limpiamos el input
        inputOperacion.value = "";
        
    } else {
        // Si está vacío mostramos error
        document.getElementById('error').textContent = "Por favor, introduce una operación.";
    }
}
