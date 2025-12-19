# 🛒 React E-commerce

Aplicación de comercio electrónico moderna desarrollada con React, Vite y TailwindCSS. Este proyecto implementa un sistema completo de carrito de compras con autenticación, gestión de estado global y una interfaz de usuario moderna.

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Scripts Disponibles](#-scripts-disponibles)
- [Documentación de Carpetas](#-documentación-de-carpetas)

## ✨ Características

- 🛍️ Catálogo de productos con búsqueda
- 🛒 Carrito de compras persistente
- 🔐 Sistema de autenticación
- 📱 Diseño responsive
- 🎨 UI moderna con componentes reutilizables
- 💾 Gestión de estado global con Zustand
- 🔔 Notificaciones toast
- 🎯 Rutas protegidas

## 🚀 Tecnologías

### Core

- **React 19.2.0** - Biblioteca de UI
- **Vite 7.2.4** - Build tool y dev server
- **React Router 7.10.1** - Enrutamiento

### Gestión de Estado

- **Zustand 5.0.9** - State management global

### Estilos

- **TailwindCSS 4.1.18** - Framework CSS utility-first
- **Radix UI** - Componentes accesibles y sin estilos
- **Lucide React** - Iconos

### Utilidades

- **clsx & tailwind-merge** - Gestión de clases CSS
- **crypto-hash** - Hashing para autenticación
- **sonner** - Sistema de notificaciones toast

## 📁 Estructura del Proyecto

```
react-ecommerce/
│
├── public/                      # Archivos estáticos
│   └── vite.svg                # Logo de Vite
│
├── src/                        # Código fuente principal
│   ├── assets/                 # Recursos estáticos (imágenes, etc.)
│   │   └── react.svg
│   │
│   ├── components/             # Componentes React
│   │   ├── ui/                # Componentes de UI reutilizables
│   │   │   ├── breadcrumb.jsx
│   │   │   ├── button.jsx
│   │   │   ├── card.jsx
│   │   │   ├── checkbox.jsx
│   │   │   ├── dialog.jsx
│   │   │   ├── dropdown-menu.jsx
│   │   │   ├── field.jsx
│   │   │   ├── input.jsx
│   │   │   ├── label.jsx
│   │   │   ├── separator.jsx
│   │   │   ├── sheet.jsx
│   │   │   ├── sidebar.jsx
│   │   │   ├── skeleton.jsx
│   │   │   ├── sonner.jsx
│   │   │   └── tooltip.jsx
│   │   │
│   │   ├── app-content.jsx    # Contenedor principal de la app
│   │   ├── app-sidebar.jsx    # Barra lateral de navegación
│   │   ├── login-form.jsx     # Formulario de inicio de sesión
│   │   ├── product-card.jsx   # Tarjeta de producto individual
│   │   ├── products.jsx       # Lista de productos
│   │   ├── protected-route.jsx # HOC para rutas protegidas
│   │   ├── search-form.jsx    # Formulario de búsqueda
│   │   ├── selection-quantity.jsx # Selector de cantidad
│   │   └── version-switcher.jsx   # Selector de versión
│   │
│   ├── hooks/                  # Custom React Hooks
│   │   └── use-mobile.js      # Hook para detectar dispositivos móviles
│   │
│   ├── lib/                    # Utilidades y helpers
│   │   ├── auth.js            # Funciones de autenticación
│   │   └── utils.js           # Funciones utilitarias
│   │
│   ├── pages/                  # Páginas de la aplicación
│   │   ├── Home/
│   │   │   └── Home.jsx       # Página principal con productos
│   │   ├── Login/
│   │   │   └── Login.jsx      # Página de inicio de sesión
│   │   └── Summary/
│   │       └── Summary.jsx    # Página de resumen del carrito
│   │
│   ├── router/                 # Configuración de rutas
│   │   └── Router.jsx         # Definición de rutas de la app
│   │
│   ├── services/               # Servicios externos
│   │   └── api.js             # Llamadas a API
│   │
│   ├── stores/                 # Stores de Zustand
│   │   ├── useCartStore.js    # Store del carrito de compras
│   │   └── useStore.js        # Store general de la aplicación
│   │
│   ├── App.jsx                 # Componente raíz de la aplicación
│   ├── main.jsx               # Punto de entrada de React
│   └── index.css              # Estilos globales y configuración de Tailwind
│
├── .gitignore                  # Archivos ignorados por Git
├── components.json             # Configuración de componentes UI
├── eslint.config.js           # Configuración de ESLint
├── index.html                 # HTML principal
├── jsconfig.json              # Configuración de JavaScript
├── package.json               # Dependencias y scripts
├── package-lock.json          # Lock de dependencias
├── vite.config.js             # Configuración de Vite
└── README.md                  # Este archivo
```

## 📚 Documentación de Carpetas

### 📂 `/src/components`

Contiene todos los componentes React de la aplicación, divididos en:

#### `/src/components/ui`

Componentes de interfaz de usuario reutilizables basados en Radix UI y estilizados con TailwindCSS. Estos componentes son la base del sistema de diseño:

- **button.jsx**: Botones con diferentes variantes (primary, secondary, outline, etc.)
- **card.jsx**: Contenedores de contenido con estilos consistentes
- **dialog.jsx**: Modales y diálogos
- **input.jsx**: Campos de entrada de texto
- **sidebar.jsx**: Componente de barra lateral
- **sonner.jsx**: Sistema de notificaciones toast
- Y más componentes primitivos de UI

#### Componentes de Negocio

- **product-card.jsx**: Muestra la información de un producto (imagen, nombre, precio, stock) y permite agregarlo al carrito
- **products.jsx**: Lista de productos con funcionalidad de búsqueda
- **selection-quantity.jsx**: Control para incrementar/decrementar cantidad de productos
- **search-form.jsx**: Formulario de búsqueda de productos
- **login-form.jsx**: Formulario de autenticación de usuarios
- **protected-route.jsx**: Componente HOC que protege rutas requiriendo autenticación
- **app-sidebar.jsx**: Barra lateral con navegación y carrito
- **app-content.jsx**: Contenedor principal del contenido de la aplicación

### 📂 `/src/pages`

Páginas principales de la aplicación organizadas por funcionalidad:

- **Home/Home.jsx**: Página principal que muestra el catálogo de productos
- **Login/Login.jsx**: Página de inicio de sesión
- **Summary/Summary.jsx**: Página de resumen del carrito con detalles de compra

### 📂 `/src/stores`

Gestión de estado global usando Zustand:

- **useCartStore.js**:
  - Maneja el estado del carrito de compras
  - Funciones: `addItem`, `removeItem`, `updateQuantity`, `addQuantity`, `reduceQuantity`, `getTotal`, `getTotalItem`, `getItem`
  - Persistencia en localStorage mediante middleware `persist`
- **useStore.js**: Store general para otros estados de la aplicación

### 📂 `/src/services`

Capa de servicios para comunicación con APIs:

- **api.js**: Funciones para realizar peticiones HTTP a servicios externos (obtener productos, autenticación, etc.)

### 📂 `/src/router`

Configuración del enrutamiento:

- **Router.jsx**: Define las rutas de la aplicación usando React Router
  - `/` - Home (protegida)
  - `/summary` - Resumen del carrito (protegida)
  - `/login` - Inicio de sesión (pública)

### 📂 `/src/lib`

Funciones utilitarias y helpers:

- **auth.js**: Funciones de autenticación (login, logout, verificación de sesión)
- **utils.js**: Funciones utilitarias generales (ej: `cn()` para combinar clases CSS)

### 📂 `/src/hooks`

Custom React Hooks:

- **use-mobile.js**: Hook para detectar si el usuario está en un dispositivo móvil

### 📂 `/src/assets`

Recursos estáticos como imágenes, iconos y otros archivos multimedia

## 🔧 Instalación

1. **Clonar el repositorio**

```bash
git clone <url-del-repositorio>
cd react-ecommerce
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Iniciar el servidor de desarrollo**

```bash
npm run dev
```

4. **Abrir en el navegador**

```
http://localhost:5173
```

## 📜 Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Construye la aplicación para producción
npm run preview  # Previsualiza la build de producción
npm run lint     # Ejecuta ESLint para verificar el código
```

## 🔐 Autenticación

El sistema de autenticación utiliza:

- Hash de contraseñas con `crypto-hash`
- Almacenamiento de sesión en localStorage
- Rutas protegidas mediante el componente `ProtectedRoute`

## 🛒 Funcionalidades del Carrito

- ✅ Agregar productos al carrito
- ✅ Incrementar/decrementar cantidad
- ✅ Eliminar productos
- ✅ Cálculo automático de totales
- ✅ Validación de stock
- ✅ Persistencia en localStorage
- ✅ Notificaciones de acciones

## 📱 Responsive Design

La aplicación está completamente optimizada para:

- 📱 Dispositivos móviles
- 💻 Tablets
- 🖥️ Desktop

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es parte del curso Código G28.

---

Desarrollado con ❤️ usando React + Vite
