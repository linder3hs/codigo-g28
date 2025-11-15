// Buscar elementos del HTML en JS

// document.getElementById("id")
// buena practica, es guardar la busqueda en una variable
const tituloPrincipal = document.getElementById("titulo-principal");

console.log(tituloPrincipal);
// textContent: Es la propiedad que nos permite modificar el texto
tituloPrincipal.textContent = "Codigo G28";
// modificar estilos
// JS tiene la capacidad de modificar estilos, pero NO es recomendable
// usarlo porque para cambiar los estilos una mucho procesamiento
// tituloPrincipal.style.color = "#f01";
// si quisieramos modificar un estilo, lo recomendable es crear en CSS
// una clase y agregarle esa clase desde JS

// classList.add: sirve para agregar una clase a una etiqueta
// classList.remove: sirve para eliminar una clase a una etiqueta
tituloPrincipal.classList.add("css-titulo-principal");

// document.querySelector: busca 1 element
// document.querySelectorAll: busca todas las coincidencias

// nombre de etiqueta
const parrafo = document.querySelector("p");
const parrafos = document.querySelectorAll("p");
console.log(parrafo);
console.log(parrafos);

const btnOne = document.querySelector(".btn-one");
console.log(btnOne);

const contenedor = document.querySelector("#contenedor");

contenedor.innerHTML = `
<h2>Titulo de JS</h2>
<img width="200" src="https://yt3.googleusercontent.com/MqAUGsICRxKJmJAYlrqUnqKLGlQ5hzaiBJKbaqLSLIcGYh9fwf6kcU4i3BgmWG5o-y7W9j1Bx3Q=s900-c-k-c0x00ffffff-no-rj" />
<div>
  <p>Hola mundo</p>
</div>
`;
