/**
 * Nota: Siempre que nos comuniquemos con una API, recordemos que es basicamente apuntar a una URL
 * Esta URL es conocidad como un EndPoint
 * eje: https://api.tecsup.edu.pe/alumnos
 * Esta URL(EndPoint) nos va a retornar un JSON que podremos usar
 * para crear la lista de alumnos en la web
 *
 * IMPORTANTE: Cuando usemos una API EndPoint, debemos recordar que es async (Asincrono)
 */

// async define que la funcion que vamos a crear es asincrona
async function getWeather() {
  // Esto es latitude y longitude de Lima que usaremos para el ejemplo
  const lat = -12.04318; // Lima
  const lon = -77.02824;
  // Existe una funcion llamada fetch
  //  nota: await y fetch siempre van juntos
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&hourly=temperature_2m&timezone=auto`
  );
  const data = await response.json();
  console.log(data);
}

getWeather();
