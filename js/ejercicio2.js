/**
 * Ejercicio 2: Mayor de Edad
Crear una variable edad y mostrar si la persona es
 mayor de edad (18 años o más) o menor de edad.
 */
const edad = Number(prompt("Ingrese su edad:"));

if (edad > 0) {
  if (edad >= 18) {
    console.log("Es mayor de edad");
  } else {
    console.log("Es menor de edad");
  }
} else {
  console.log("La edad no puede ser negativo");
}
