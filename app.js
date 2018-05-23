// Mandamos a llamar a los elmentos del HTML que se van a manipular
var saludarUsario = document.getElementById('saludo');
var mostrarResultados = document.getElementById('contenedorPrincipal');
var respuestasCorrectas = document.getElementById('respuestasCorrectas');
var respuestasIncorrectas = document.getElementById('respuestasIncorrectas');

console.log(mostrarResultados); //Nos permite visualizar el elemento que se trae  del HTML

/* Declaramos las variables en las que almacenaremos
los datos ingresados por el usuario */

var nombreUsuario = prompt("¿Cual es tu nombre?");
saludarUsario.innerHTML = "Hola " + nombreUsuario; //Modificamos el HTML con el dato ingresado por el usuario
var iniciarPartida = parseInt(prompt("Ingresa el número que corresponda a tu respuesta \n ¿Quieres iniciar la partida?" +
  " \n 1.Si \n 2.No"));
console.log(iniciarPartida);

// Evaluamos las respuestas del usuario (para iniciar el juego)

if (iniciarPartida === 2) { //CASO 1; EN EL QUE EL USUARIO NO QUIERA JUGAR
  mostrarResultados.innerHTML = "<h3>Gracias por visitarnos, nos vemos pronto </h3>"
} else { //Caso en el que SI quiera continuar con el juego
  respuestasCorrectas.innerHTML = "<h4> Preguntas correctas </h4>";
  respuestasIncorrectas.innerHTML = "<h4> Preguntas incorrectas </h4>";

  alert("Ingresa el número que corresponde a tu respuesta");

  /* *******************************Comienza  la partida*************************************************


   PRIMER PREGUNTA */
  var primeraPregunta = parseInt(prompt("1.¿Que generación está por comenzar? \n 1.tercera \n 2. Segunda \n 3.Sexta"));
  if (primeraPregunta == 3) { //Ejemplo de opción con NÚMERO
    respuestasCorrectas.innerHTML += "1.¿¿Que generación está por comenzar? <br> <strong>Respuesta correcta:</str" + 
      "ong> Sexta Generación";
  } else {
    alert("Suerte para la proxima");
    respuestasIncorrectas.innerHTML += "1.¿Que generación está por comenzar? <br> <strong>Respuesta correcta:</str" + 
      "ong> Sexta Generación";
  }

  //SEGUNDA PREGUNTA
  var segundaPregunta = prompt("2.¿En que sede estamos? \n A.CDMX \n B.San Paulo \n C.Brazil");
  if (segundaPregunta == "A") { //Ejemplo de opción con LETRA
    respuestasCorrectas.innerHTML += "<br> 2.¿En que sede estamos? <br> <strong>Respuesta correcta" +
      ":</strong> CDMX";
  } else {
    alert("Te equivocaste de sede");
    respuestasIncorrectas.innerHTML += "<br> 2.¿En que sede estamos? <br> <strong>Respuesta correcta" +
      ":</strong> CDMX";
  }
  
  // TERCER PREGUNTA 

var tercerPregunta = prompt("3.¿Cual es la raíz cuadrada de 45676? \n A. 213.71944226 \n B. 90.4657 \n C. 345.89078");
if(tercerPregunta ==  "A") {
  respuestasCorrectas.innerHTML += "3.¿Cual es la raíz cuadrada de 45676? <br> <strong> Respuesta correcta" + 
  ":</strong>  213.71944226";
}else{
    alert("Esta no es");
    respuestasIncorrectas.innerHTML += "3.¿Cual es la raíz cuadrada de 45676? <br> <strong> Respuesta correcta" + 
    ":</strong>  213.71944226";
  } 
}


