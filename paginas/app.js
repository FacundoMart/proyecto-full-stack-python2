// Validacion del formulario con javascript

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formulario-general");
  
    form.addEventListener("submit", function (e) {
      // Realizar la validación de campos aquí
      const nombreApellido = document.getElementById("nombre_apellido").value;
      const email = document.getElementById("email").value;
      const intereses = document.querySelectorAll('input[name="interes[]"]:checked');
  
      // Validación para el campo "Nombre y Apellido"
      if (nombreApellido.trim() === "") {
        alert("Por favor, ingrese su Nombre y Apellido");
        e.preventDefault(); // Evitar el envío del formulario si hay errores
        return;
      }
  
      // Validación para el campo e-mail
      if (email.trim() === "") {
        alert("Por favor, ingrese una dirección de correo electrónico");
        e.preventDefault();
        return;
      }
  
      // Validación para el campo "Interés en Cursos"
      if (intereses.length === 0) {
        alert("Por favor, seleccione al menos un interés en cursos");
        e.preventDefault();
        return;
      }
  
      
    });
  });
  