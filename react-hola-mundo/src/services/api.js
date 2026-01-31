export const BASE_URL = "http://127.0.0.1:5000/api";

export const AUTH_URL = "/auth";
export const TASK_URL = "/tareas";

export function validateAuthorization(response) {
  if (response.status === 401) {
    // limpiar localStorage
    localStorage.clear();
    window.location.href = "/login";
    return false;
  }
  return true;
}
