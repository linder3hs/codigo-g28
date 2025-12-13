import { getUsers } from "@/services/api";
import { sha256 } from "crypto-hash";

async function hashPassword(password) {
  return await sha256(password);
}

export async function validateLogin(email, password) {
  // 1: Traer a todos los usuarios
  const users = await getUsers();
  // 2: Buscar el usuario por email
  const user = users.find((u) => u.email === email); // si no encuentra un email find retorna undefined
  // cuando el usuario no existe
  if (!user) {
    return {
      ok: false,
      message: "Error: Email y/o password incorrectos",
    };
  }
  // 3: Verificar el password
  const hashPwd = await hashPassword(password);

  if (hashPwd !== user.password) {
    return {
      ok: false,
      message: "Error: Email y/o password incorrectos",
    };
  }

  return {
    ok: true,
    user,
  };
}
