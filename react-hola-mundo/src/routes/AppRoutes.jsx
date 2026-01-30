import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import App from "../App";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta por defecto redirige a login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Rutas de autenticación */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Ruta de la aplicación principal (TodoList) */}
        <Route path="/app" element={<App />} />

        {/* Ruta 404 - redirige a login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
