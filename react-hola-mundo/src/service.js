const BASE_URL = "https://6932247011a8738467d19c36.mockapi.io/tasks";

// Metodo: GET (Defualt)
export async function getTaskFromAPI() {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
}

// Metodo: POST
// task: Es el objeto que contiene el json con la data
export async function createTaskToAPI(task) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    // OJO: Los objetos no puedes viajar usando fetch
    // debemos convertir ese objeto json a un json string
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}
