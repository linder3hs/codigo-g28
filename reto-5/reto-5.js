// palabra reservada para hacer referencia a un elemento
function incrementar(element) {
  // paso 1: retrocemos a buscar al elemento padre usando closest
  // element.closest("div"): retorna el div contenido del button+span+button
  // una vez que ya tenemos usamos el querySelector, en este caso como estamos
  // usando querySelector sobre el div, esta funcion solo buscara en los elementos
  /**
   * element.closest("div")
   * <div>
   *  <button>+</button>
   *  <span>1</span>
   *  <button>-</button>
   * </div>
   * NOTA: la siguiente linea solo busca en el div encontrado
   * element.closest("div").querySelector
   * buscamos en el div encontrado la etiqueta span
   * element.closest("div").querySelector("span")
   */

  // la etiqueta span
  const contador = element.closest("div").querySelector("span");
  // vamos a modificar su valor
  // contador.textContext = ""
  // el valor actual: contador.textContent
  // pero al colocarle es "=" (operador de asignacion)
  contador.textContent = Number(contador.textContent) + 1;
}
