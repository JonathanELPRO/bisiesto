import determinarBisiesto from "./bisiestoYorN.js";

const anio = document.querySelector("#anio");
const form = document.querySelector("#bisiesto-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const anioValue = Number.parseInt(anio.value);
  

  div.innerHTML = "<p>" + determinarBisiesto(anioValue) + "</p>";
});
