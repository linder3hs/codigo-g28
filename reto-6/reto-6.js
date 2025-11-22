/**
 * Nota: Siempre que nos comuniquemos con una API, recordemos que es basicamente apuntar a una URL
 * Esta URL es conocidad como un EndPoint
 * eje: https://api.tecsup.edu.pe/alumnos
 * Esta URL(EndPoint) nos va a retornar un JSON que podremos usar
 * para crear la lista de alumnos en la web
 *
 * IMPORTANTE: Cuando usemos una API EndPoint, debemos recordar que es async (Asincrono)
 */
const form = document.querySelector("form");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const place = formData.get("place");
  await getCoordinatesFromPlace(place);
  form.reset();
});

async function getCoordinatesFromPlace(place) {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${place}&count=1&language=es&format=json`
  );
  const data = await response.json();

  if (data.results) {
    const latitude = data.results[0].latitude;
    const longitude = data.results[0].longitude;
    await getWeather(latitude, longitude);
  } else {
    alert("El lugar buscado, no existe.");
  }
}

// async define que la funcion que vamos a crear es asincrona
async function getWeather(lat, lon) {
  // Existe una funcion llamada fetch
  //  nota: await y fetch siempre van juntos
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&hourly=temperature_2m&timezone=auto`
  );
  const data = await response.json();
  console.log(data);
}
