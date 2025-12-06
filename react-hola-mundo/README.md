# React + Vite - Proyecto TodoList

Este proyecto es una aplicación de lista de tareas (TodoList) construida con React y Vite, que presenta una interfaz de usuario pulida y capacidades de gestión de tareas.

## Estructura del Proyecto

El proyecto sigue una estructura modular para asegurar la escalabilidad y el mantenimiento.

```
src/
├── assets/          # Activos estáticos como imágenes y estilos globales
├── components/      # Componentes reutilizables globales
│   ├── ui/          # Componentes primitivos reutilizables (Botones, Inputs, Tarjetas)
│   └── profile      # Componentes especificos del page
├── hooks/           # Hooks personalizados de React para lógica de negocio
├── service/         # Integración de API y comunicación con el backend
├── utils/           # Funciones auxiliares (Formato de fechas, validación)
├── App.jsx          # Componente principal de la aplicación
└── main.jsx         # Punto de entrada de la aplicación
```

### Convenciones de Carpetas

- **`components/ui/`**: Este directorio está reservado para componentes "tontos" o primitivos que son altamente reutilizables y contienen poca o ninguna lógica de negocio. Ejemplos incluyen Botones, Campos de entrada, Tarjetas y Badges.
- **`components/`**: Coloca aquí componentes más complejos y específicos del dominio. Estos pueden combinar múltiples componentes de UI o incluir lógica específica.
- **`hooks/`**: Encapsula la lógica compleja y la gestión del estado en hooks personalizados para mantener los componentes limpios. Por ejemplo, `useAppLogic.js` maneja la funcionalidad principal del TodoList.
- **`service/`**: Todas las llamadas a API externas deben definirse aquí, separando la obtención de datos del renderizado de la UI.
- **`utils/`**: Funciones puras para tareas comunes como formatear fechas (`date.js`) o transformación de datos.

## Empezando

1.  **Instalar dependencias**:

    ```bash
    npm install
    ```

2.  **Ejecutar el servidor de desarrollo**:

    ```bash
    npm run dev
    ```

3.  **Construir para producción**:
    ```bash
    npm run build
    ```
