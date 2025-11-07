/**
 * Ejercicio: Sistema de Clasificación de Edades para Cine
Dada la edad de una persona, mostrar qué tipo de películas puede ver:

Menor a 7 años: "Solo películas Infantiles (G)"
7 a 12 años: "Puedes ver películas para Todo Público (PG)"
13 a 15 años: "Puedes ver películas para Adolescentes (PG-13)"
16 a 17 años: "Puedes ver películas para Mayores con restricción (R con adulto)"
18 o más: "Puedes ver Todo tipo de películas (Sin restricción)"
 */
const edad = Number(prompt("Ingrese su edad:"));

if (edad < 0) {
  console.log("Edad inválida");
} else if (edad < 7) {
  console.log("Solo puede ver películas infantiles (G)");
} else if (edad < 13) {
  console.log("Solo puede ver películas para Todo Público (PG)");
} else if (edad < 16) {
  console.log("Solo puede ver películas para Adolescentes (PG-13)");
} else if (edad < 18) {
  console.log(
    "Solo puede ver películas para Mayores con restricción (R con adulto)"
  );
} else {
  console.log("Puedes ver Todo tipo de películas (Sin restricción)");
}
