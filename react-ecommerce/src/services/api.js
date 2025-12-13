/**
 * Recursos
 * - products
 * - users
 */
const BASE_URL = "https://693b88c69b80ba7262cd8e30.mockapi.io";

export async function getProducts() {
  const response = await fetch(`${BASE_URL}/products`);
  const data = await response.json();
  return data;
}

export async function getUsers() {
  const response = await fetch(`${BASE_URL}/users`);
  const data = await response.json();
  return data;
}
