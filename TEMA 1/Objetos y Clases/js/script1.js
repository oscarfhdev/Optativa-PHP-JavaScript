// Objeto literal alumno (como el ejemplo del profesor persona1)
let alumno = {
  nombre: "María Pérez",
  calificaciones: {
    DIN: 8.5,
    AaD: 7.0,
    Opt: 6.5,
    IPE: 9.0,
    Ingles: 8.0
  },

  // Método que calcula la media
  media: function() {
    let notas = Object.values(this.calificaciones);
    let suma = notas.reduce((acum, nota) => acum + nota, 0);
    return (suma / notas.length).toFixed(2);
  },

  // Método que devuelve los datos del alumno en texto
  mostrarDatos: function() {
    let texto = `Nombre del alumno: ${this.nombre}<br>`;
    texto += "Calificaciones:<br>";
    for (let modulo in this.calificaciones) {
      texto += `${modulo}: ${this.calificaciones[modulo]}<br>`;
    }
    texto += `Media: ${this.media()}`;
    return texto;
  }
};

// Función que se llama desde el botón del HTML
function mostrarAlumno() {
  document.getElementById("resultado").innerHTML = alumno.mostrarDatos();
}
