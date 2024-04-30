import determinarBisiesto from "./bisiestoYorN.js";

const anio = document.querySelector("#anio");
const form = document.querySelector("#bisiesto-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const anioValue = Number.parseInt(anio.value);
  

  div.innerHTML = "<p>" + determinarBisiesto(anioValue) + "</p>";
});

 
//Buscar la cantidad de aparaciones de una letra en un string
//Ver que un substring noo este en otro string
//Recorrer el string original cada letra y contar la cantidad de apariciones de cada uno, y anadir ese string
//(La palabra n se repite 2 veces) en nuestro string resultado solo si no lo puse antes es decir usar la funcionalidad 2
// 0-127      10.0.0.0-10.255.255.255
// 128-191    172.16.0.0-172.31.255.255
// 192-223
// 224-239
// 240-255