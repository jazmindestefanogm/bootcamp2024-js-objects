// Constructor de Persona
function Persona(nombre, edad, profesion, intereses) {
  this.nombre = nombre;
  this.edad = edad;
  this.profesion = profesion;
  this.intereses = intereses;
}

// Definir el método saludar en el prototipo de Persona
Persona.prototype.saludar = function () {
  return `¡Hola! Mi nombre es ${this.nombre} y tengo ${this.edad} años. Soy ${
    this.profesion
  } y mis intereses son ${this.intereses.join(", ")}.`;
};

let persona; // Declaramos persona fuera del ámbito del formulario para que sea accesible en diferentes eventos

document
  .getElementById("infoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener los valores ingresados por el usuario
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let profesion = document.getElementById("profesion").value;
    let intereses = document
      .getElementById("intereses")
      .value.split(",")
      .map((item) => item.trim());

    // Crear una instancia de Persona con la información ingresada por el usuario
    persona = new Persona(nombre, edad, profesion, intereses);

    // Mostrar el resultado en la interfaz de usuario
    document.getElementById("datosPersona").innerHTML = `
          <strong>Nombre:</strong> ${persona.nombre}<br>
          <strong>Edad:</strong> ${persona.edad}<br>
          <strong>Profesión:</strong> ${persona.profesion}<br>
      `;
    document.getElementById("datosIntereses").innerHTML = `
          <strong>Intereses:</strong><br>
          <ul>
              ${persona.intereses
                .map((interes) => `<li>${interes}</li>`)
                .join("")}
          </ul>
      `;
    document.getElementById("resultado").style.display = "block";
    document.getElementById("saludoBtn").style.display = "inline"; // Mostrar el botón de saludo
  });

document.getElementById("saludoBtn").addEventListener("click", function () {
  // Cuando se hace clic en el botón "Saludar", se muestra un saludo utilizando el método saludar() del objeto persona
  alert(persona.saludar());
});
