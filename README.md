# Corprecam Web

Corprecam Web es una plataforma integral desarrollada para la gestión y visualización de rutas de recolección (Macrorutas y Microrutas) y la administración de la información relacionada con el reciclaje y los recicladores.

El proyecto está dividido en dos partes principales:
- **Frontend**: Una aplicación web estática/dinámica súper rápida construida con Astro.
- **Backend**: Un Headless CMS impulsado por Strapi v5 para la gestión de contenido.

## Estructura del Proyecto

El repositorio consiste en un monorepo que contiene las siguientes carpetas principales:

```text
corprecam-web/
├── frontend/   # Aplicación web (Astro + Tailwind CSS)
├── backend/    # Headless CMS y API (Strapi v5 + SQLite)
└── plan.md     # Notas de planificación y desarrollo
```

---

## Frontend

El frontend está construido con el framework **Astro**, enfocándose en el rendimiento y en la entrega de sitios web rápidos (Islands Architecture). 

### Tecnologías Principales
- [Astro](https://astro.build/) - Framework web.
- [Tailwind CSS v4](https://tailwindcss.com/) - Framework CSS de utilidades para el diseño visual.
- [Leaflet](https://leafletjs.com/) - Biblioteca de JavaScript para mapas interactivos (para la visualización de rutas).
- [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) - Animaciones al hacer scroll.

### Requisitos Previos
- Node.js (v18+)
- npm o yarn

### Instalación y Ejecución Local

1. Navegar a la carpeta del frontend:
   ```bash
   cd frontend
   ```
2. Instalar las dependencias:
   ```bash
   npm install
   ```
3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
El sitio estará disponible por defecto en `http://localhost:4321`.

---

## Backend

El backend está construido con **Strapi**, proporcionando una API RESTful y una interfaz de administración fácil de usar para gestionar los datos de la aplicación.

### Tecnologías Principales
- [Strapi v5](https://strapi.io/) - Headless CMS de código abierto.
- [SQLite](https://sqlite.org/) - Base de datos por defecto para el entorno de desarrollo.
- Tipos de Contenido principales: `macroruta`, `microruta`, `reciclador`.

### Requisitos Previos
- Node.js (v20.0.0 a v24.x.x)
- npm (v6.0.0+)

### Instalación y Ejecución Local

1. Navegar a la carpeta del backend:
   ```bash
   cd backend
   ```
2. Instalar las dependencias:
   ```bash
   npm install
   ```
3. Iniciar el servidor de desarrollo de Strapi:
   ```bash
   npm run develop
   ```
La API estará disponible en `http://localhost:1337/api` y el panel de administración en `http://localhost:1337/admin`.

---

## Funcionalidades Clave

- **Mapas Interactivos**: Integración de Leaflet para mostrar interactivamente las macrorutas y microrutas de recolección en base a coordenadas geográficas (GeoJSON).
- **Gestión de Contenido**: El panel de administración de Strapi permite a los administradores actualizar dinámicamente la información de rutas, recicladores y otros datos relevantes sin necesidad de tocar el código.
- **Optimización de Rendimiento**: Uso de Astro para renderizar HTML estático donde sea posible e hidratar componentes interactivos (como los mapas) solo cuando es necesario, asegurando una carga ultra-rápida.

## Contribución

Asegúrate de ejecutar los linters y las pruebas antes de subir tus cambios. Respeta la estructura y las convenciones establecidas en cada uno de los subproyectos (frontend y backend).