// Respuesta

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

    // Crear un objeto con la información ingresada por el usuario
    persona = {
      nombre: nombre,
      edad: edad,
      profesion: profesion,
      intereses: intereses,
      saludar: function () {
        // El método saludar devuelve un saludo con los datos de la persona
        // Utilizamos "this" para referirnos al objeto en el que se está ejecutando la función,
        // en este caso, "this" se refiere al objeto persona.
        return `¡Hola! Mi nombre es ${this.nombre} y tengo ${
          this.edad
        } años. Soy ${this.profesion} y mis intereses son ${this.intereses.join(
          ", "
        )}.`;
      },
    };

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

// El objeto persona está declarado fuera del ámbito del formulario y del botón "Saludar",
// convirtiéndolo en una variable global. Esto permite que la información de la persona
// sea accesible desde diferentes eventos sin necesidad de volver a definirla en cada evento.

// Sin embargo, es importante tener en cuenta que la información almacenada en la variable persona se pierde
// cuando se recarga la página, ya que las variables JavaScript se reinician con cada recarga de la página.
// Si se necesita conservar la información de la persona después de recargar la página, se deben utilizar
// mecanismos de almacenamiento persistente como cookies, localStorage, sessionStorage o una base de datos en el servidor.
