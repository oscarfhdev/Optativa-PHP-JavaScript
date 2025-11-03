// Objeto literal alumno
let alumno = { 
  // Se puede acceder a todas estas variables internas, 
  nombreCompleto: "Óscar Fernández",

  // Calificaciones es un otro objeto literal anidado, dentro tneemos propiedades clave-valor;
  calificaciones: {
    DIN: 8.5,
    AaD: 10.0,
    Opt: 6.5,
    IPE: 9.0,
    Ingles: 8.0
  },

  //


  // Funciones visibles por defecto
  devolverNombreCompleto: function(){
    let divNombreCompleto = document.createElement("div")
    let pNombreCompleto = document.createElement("p")

    pNombreCompleto.textContent= "Nombre completo: " + this.nombreCompleto;

    divNombreCompleto.appendChild(pNombreCompleto);

    return divNombreCompleto;
  },


  devolverCalificaciones: function(){
    // Creamos el div de calificaciones y la variable suma
    let divCalificaciones = document.createElement("div")
    let suma = 0;
    
    // Ahora recorremos el objeto de calificaciones
    for (const modulo in this.calificaciones) {

      // Creamos el párrafo
      let p = document.createElement("p");
      // Asignamos el contenido
      p.textContent = modulo + ": " + this.calificaciones[modulo];
      // Lo agregamos al div
      divCalificaciones.appendChild(p);

      // Sumar la nota para calcular media
      suma += this.calificaciones[modulo];
    }

    // Creamos el párrafo con la media
    let pMedia = document.createElement("p");

    // Aquí calculamos la media, dividiendo la suma entre la cantidad de asignaturas (también podemos utilizar Objects.value)
    pMedia.textContent = "Media del curso: " + (suma / Object.keys(this.calificaciones).length);

    divCalificaciones.appendChild(pMedia); // Añadimos el <p> de media al div

    return divCalificaciones;

  },

  // Se llamará desde otro método al pulsar el botón
  mostrarDatosAlumno: function(){
    // Guardamos el div del nombre y de las calificaciones
    let divNombreCompleto = this.devolverNombreCompleto(); 
    let divCalificaciones = this.devolverCalificaciones();

    // Obtenemos el div del resultado y lo reseteamos
    const divResultado = document.getElementById("resultado");
    divResultado.textContent= "";
    
    // Ahora al div de resultado le añadimos los dos div con el contenido
    divResultado.appendChild(divNombreCompleto);
    divResultado.appendChild(divCalificaciones);
  }
};

// Función que se llama desde el botón del HTML
function mostrarAlumno() {
  alumno.mostrarDatosAlumno();
}
