const BASE_URL = "https://693b88c69b80ba7262cd8e30.mockapi.io/products";

export async function getProducts() {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
}
