// OPERADOR TERNARIO
const edad = 15;

if (edad >= 18) {
  console.log("Mayor");
} else {
  console.log("Menor");
}

// OPERADOR TERNARIO condicion ? verdadero : falsa
const mensaje = edad >= 18 ? "Mayor" : "Menor";
console.log(mensaje);

// EJEMPLO
const precio = 99;
// Si el precio es mayor a 100 entonces hagamos un descuento del 10% si no del 0%
const descuento = precio > 100 ? 0.1 : 0;
console.log(descuento);

const nombre = "anderson";
// OPERADOR TERNARIO NO SE DEBE USAR
const mensaje2 =
  nombre === "linder"
    ? "profesor"
    : nombre === "anderson"
    ? "alumno"
    : nombre === "juan"
    ? "director"
    : "no existe";
console.log(mensaje2);

// BUCLE ->
// for (inicializacion; condicion; incremento) { }

// contar del 1 al 10
// i++ contar de 1 en 1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("---------------------");
// 10 - 20 contar de 2 en 2
for (let j = 10; j <= 20; j += 2) {
  console.log(j);
}
console.log("---------------------");
// 10 - 0
for (let h = 10; h >= 0; h--) {
  console.log(h);
}
console.log("---------------------");
// tabla de mutiplicar de 5
for (let g = 0; g <= 20; g++) {
  console.log("5 *", g, " = ", g * 5);
}

/* Ejercicio:
Invertir un string

hola = aloh
codigo = ogidoc
*/
// los indices empiezan en 0
const palabra = "hola";
console.log(palabra[0]);
console.log(palabra[1]);
console.log(palabra[2]);
console.log(palabra[3]);
// let palabraInvertida = palabra[3] + palabra[2] + palabra[1] + palabra[0]
// console.log(palabraInvertida)

// cantidad de caracteres

console.log(palabra.length);
console.log("----------");

let palabraInvertida = "";

for (let i = palabra.length - 1; i >= 0; i--) {
  console.log(i);
  palabraInvertida += palabra[i];
}

console.log(palabraInvertida);

// Crear un algoritmo que permita cortar la cantidad de vocales de una palara
// hola mundo
// vocales = 4
const palabra = "hOla mundo"
let contador = 0
const vocales = "aeiou"
// includes siempre retornar un boolean
console.log(palabra.includes("h"))
console.log(palabra.includes("z"))

for (let i = 0; i < palabra.length; i++) {
  if (vocales.includes(palabra[i].toLowerCase())) {
    contador++
  }
}
console.log(contador)
    
let i = 0
while (i <= 5) {
  console.log(i)
  // siempre debemos romper 
  i++
}