// 4 formas de crear funciona 

// 1 clasica
function procesarPago(monto, dni, tieneDescuento) {
  // bloque de codigo que tendremos para esta funcion
  // al monto vamos a sumarle IGV
  // retornar un string que diga el monto final + dni
  let montoFinal = monto + (monto * 0.18)
  if (tieneDescuento) {
    // restar al monto funal un 10%
    montoFinal = montoFinal - (montoFinal * 0.1)
  }
  return "El monto final es: " + montoFinal + ", DNI: " + dni
}

// por defecto NO se ejecuta
// para que la funcion se ejecute tiene que ser llamada
// y como se llama?
console.log(procesarPago(450, "72812323", true))
console.log(procesarPago(500, "10021345", false))
console.log(procesarPago())
    
/**
 * 
Problema 1: Suma de Números del 1 al N
Descripción: Crear una función que reciba un número y calcule la suma de todos los números desde 1 hasta ese número.
 */
// 5 = 1 + 2 + 3 + 4 + 5 = 15
// 10 = 1 + 2 + 3 + 4 + 5 ... 10 = 55
// (n * n+1) / 2
function sumarHastaN(numero) {
  let suma = 0
  for (let i = 1; i <= numero; i++) {
    suma += i
  }

  return suma
}

console.log(sumarHastaN(5))
console.log(sumarHastaN(100))
console.log(sumarHastaN(20))
    

function invertirNumero1(numero) {
  // vamos usar funciones de JS para poder invertir este
  // el proceso sera el siguiente
  // convertir de number a string
  const numeroAString = String(numero)
  // convertir de string a una lista
  const stringALista = numeroAString.split("")
  // invertir la lista
  const listaInvertida = stringALista.reverse()
  // convertir la lista a un numero?
  // unir los elemenotos de una lista
  const listaUnida = listaInvertida.join("")
  return Number(listaUnida)
}
console.log(invertirNumero(123))
console.log(invertirNumero(5041))
 
// NOTE: revisar el codigo de arriba para recordar que hace cada funcion   
function invertirNumero(numero) {
  return Number(String(numero).split("").reverse().join(""))
}

/**
Contar Números Pares en un Rango
Crear una función que reciba dos números (inicio y fin) y cuente cuántos números pares hay entre ellos (incluyendo los extremos).
1,10 -> 2,4,6,8,10 -> 5
 */
function contarNumerosPares(inicio, fin) {
  let contador = 0
  for (let i = inicio; i <= fin; i++)  {
    if (i % 2 === 0) {
      contador++  
    }
  }
  return contador
}
console.log(contarNumerosPares(1, 10))
console.log(contarNumerosPares(1, 100))
console.log(contarNumerosPares(20, 100))
    
const animales = ["perro", "gato", "loro", "leon"]
// antigua
for (let i = 0; i < animales.length; i++) {
  console.log(animales[i])
}
// moderna for of
for (let animal of animales) {
  console.log(animal)
}
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let numero of numeros) {
  if (numero % 2 === 0) {
    console.log(numero)
  }
}


// {} = llaves
// [] = corchetes

// Objeto
const persona = {
  nombre: "Juan",
  apellido: "Perez",
  dni: 7123123
}

console.log(persona)
console.log(persona.apellido)
console.log(persona.nombre)
console.log(persona.dni)
    

/**
Calificaciones de Estudiantes
Descripción: Crear una función que reciba un array de calificaciones y:

Calcule el promedio
Cuente cuántos aprobaron (nota >= 60)
Cuente cuántos reprobaron
Encuentre la nota más alta
Imprima en consola cada valor
 */

function analizarCalifaciones(notas) {
  let suma = 0
  let aprobados = 0
  let reprobados = 0
  let notaMaxima = notas[0]

  for (let nota of notas) {
    suma += nota

    if (nota >= 60) {
      aprobados++
    } else {
      reprobados++
    }

    if (nota > notaMaxima) {
      notaMaxima = nota
    }
  }

  const promedio = suma / notas.length

  console.log("Promedio:", promedio)
  console.log("Cantidad de aprobados:", aprobados)
  console.log("Cantidad de reprobados:", reprobados)
  console.log("Nota mas alta:", notaMaxima)
}
analizarCalifaciones([100, 50, 60, 75, 25])
analizarCalifaciones([20, 13, 45, 56, 65, 12])


/**
Filtrar y Contar
Descripción: Crear una función que reciba un array de números y un número mínimo. La función debe:

Crear un nuevo array solo con números mayores al mínimo
Contar cuántos números fueron filtrados
imprimir ambos datos
 */

function filtrarMayores(numeros, minimo) {
  const numerosFiltrados = []

  for (let numero of numeros) {
    if (numero >= minimo) {
      // agregamos el numero al arregla
      numerosFiltrados.push(numero)
    }
  }
  console.log(numerosFiltrados)
  console.log(numerosFiltrados.length)
}

filtrarMayores([10, 20, 30, 35, 40], 30)
// [30, 35, 40]
// 3 numeros filtrados