import { Navigate } from "react-router-dom";

/**
 * Componente que protege rutas verificando si existe un access_token
 * Si existe el token, permite el acceso a la ruta (children)
 * Si no existe, redirige al login
 */
function ProtectedRoute({ children }) {
  const accessToken = localStorage.getItem("access_token");

  // Si no hay token, redirigir al login
  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  // Si hay token, permitir acceso a la ruta protegida
  return children;
}

export default ProtectedRoute;
