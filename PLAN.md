# Plan de Implementación: Strapi CMS para Corprecam Web

Este documento define la estrategia para integrar Strapi CMS en el proyecto Corprecam Web, permitiendo la gestión dinámica de contenidos sin sacrificar el Sistema de Diseño "Eco-Industrial Humano" ni el rendimiento estático de Astro.

## 🎯 Objetivos Principales
1.  **Independencia de Contenido:** Permitir la edición de textos, imágenes y documentos legales sin tocar el código.
2.  **Integridad de Diseño:** Mapear los datos del CMS estrictamente a los tokens de diseño (Kraft, Steel, Forest, Safety).
3.  **Arquitectura Limpia:** Mantener una estructura monorepo clara.

---

## 📅 Fases de Ejecución

### Fase 1: Infraestructura (Backend)
*Configuración del entorno para el CMS.*

1.  **Instalación de Strapi:**
    *   Ubicación propuesta: Carpeta `/backend` en la raíz del proyecto (Monorepo).
    * No uses strapi cloud, lo haremos en local por ahora, no inicies sesion.
    *   Base de datos: SQLite (Desarrollo/Local) -> Postgres (Producción).
2.  **Variables de Entorno (`.env` en Astro):**
    *   `PUBLIC_STRAPI_URL`: URL base del CMS (ej. `http://localhost:1337`).
    *   `STRAPI_API_TOKEN`: Token seguro para peticiones build-time.

### Fase 2: Modelado de Contenido (Content Types)
*Estructura de datos en Strapi.*

#### 2.1 Colecciones Únicas (Single Types)
*Para páginas que solo existen una vez.*

*   **Homepage:**
    *   `hero_title` (Texto Corto)
    *   `hero_description` (Texto Largo)
    *   `hero_bg_image` (Media)
    *   `about_title` (Texto Corto)
    *   `about_description` (Texto Rico / Markdown)
    *   `about_image` (Media)
*   **GlobalConfig:**
    *   `site_name`
    *   `contact_email`
    *   `contact_phone`
    *   `social_links` (Componente repetible: Red + URL)

#### 2.2 Colecciones Repetibles (Collection Types)
*Para listas de elementos.*

*   **Servicios (Gestión):**
    *   `title` (Texto)
    *   `image` (Media)
    *   `summary` (Texto Corto - para la tarjeta)
    *   `content` (Texto Rico - para el detalle)
*   **Documentos (Transparencia):**
    *   `title` (Texto)
    *   `category` (Enumeración: Legal, Financiero, Reportes)
    *   `file_pdf` (Media)
    *   `publication_date` (Fecha)
*   **Aliados:**
    *   `name` (Texto)
    *   `logo` (Media)
    *   `website` (URL)

### Fase 3: Integración Frontend (Astro)
*Conexión y renderizado.*

1.  **Cliente API (`src/lib/strapi.ts`):**
    *   Función `fetchApi` tipada para manejar las llamadas a Strapi.
    *   Utilidad para resolver URLs de imágenes (añadir host si es relativo).
2.  **Páginas Dinámicas:**
    *   Convertir `index.astro` para cargar datos de `Homepage` y `Servicios`.
    *   Crear `[...slug].astro` si se requieren páginas de detalle para servicios.
3.  **Componentes UI:**
    *   Refactorizar `Hero.astro`, `Card.astro`, `Allies.astro` para aceptar datos puros (props) y no depender de datos locales.

### Fase 4: Formulario de Contacto
*Gestión de leads y PQRS.*

1.  **Backend (Strapi):**
    *   Crear colección `Mensajes` (Nombre, Email, Asunto, Mensaje, Tipo).
    *   Configurar permisos de `create` para el rol Public.
2.  **Frontend (Astro):**
    *   Hidratar `ContactForm.astro` (usando Preact o Vanilla JS) para manejar el envío `POST` asíncrono.
    *   Validación visual de errores y éxito (Feedback al usuario).

### Fase 5: Despliegue y Optimización
1.  **Imágenes:**
    *   Configurar `<Image />` de Astro para optimizar imágenes remotas de Strapi.
2.  **Webhooks:**
    *   Configurar Strapi para disparar un "Rebuild" en el servidor de hosting (Vercel/Netlify) cuando se edite contenido.

---

## ⚠️ Reglas de Diseño (Para Editores)
Para mantener el sistema "Eco-Industrial Humano":
*   **Imágenes:** Subir imágenes con buena iluminación y contraste. Evitar vectores planos estilo "Corporate Memphis".
*   **Textos:** Los títulos deben ser cortos y directos (estilo industrial).
