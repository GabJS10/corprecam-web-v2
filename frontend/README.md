# Corprecam Web - Plataforma de Gestión Ambiental y Social

> **Nota para Agentes IA y Desarrolladores:** Este documento contiene el contexto completo del proyecto, incluyendo decisiones arquitectónicas, stack tecnológico y el Sistema de Diseño obligatorio "Eco-Industrial Humano". Leed esto antes de realizar cambios.

## 1. 🌍 Contexto del Proyecto

**Corprecam E.S.P** es una organización dedicada a la dignificación de la labor del reciclador de oficio y la promoción de la economía circular.

Esta plataforma web no es solo un sitio informativo; es una herramienta de comunicación que debe reflejar la **materialidad, solidez y humanidad** del trabajo físico del reciclaje. Evitamos la estética etérea de las startups tecnológicas ("SaaS genérico") en favor de una estética que se sienta construida y tangible.

### Objetivos
1.  **Dignificación:** Mostrar el reciclaje como una labor profesional e industrial, no como caridad.
2.  **Transparencia:** Comunicar claramente la gestión y documentos legales.
3.  **Contacto:** Facilitar la interacción comunitaria (PQRS).

---

## 2. 🎨 Sistema de Diseño: "Eco-Industrial Humano"

Este proyecto sigue estrictamente un sistema de diseño personalizado. **Cualquier nuevo componente debe adherirse a estos principios.** No uses estilos predeterminados de bibliotecas de UI.

### 2.1 Filosofía Visual
*   **Materialidad:** La interfaz debe sentirse como cartón, papel reciclado y acero.
*   **Tactile Edge (Borde Táctil):** Evitamos sombras difusas (blur). Usamos bordes sólidos y sombras duras (offset) para dar peso físico a los elementos.
*   **Alto Contraste:** Tipografía oscura sobre fondos claros (cremas/papel), evitando el blanco puro clínico (#FFFFFF) en grandes superficies.

### 2.2 Tokens de Diseño (Tailwind v4)

Estos tokens están configurados en `src/layouts/Layout.astro` y deben usarse preferentemente sobre valores arbitrarios.

| Token | Variable CSS | Color Hex | Uso Principal |
| :--- | :--- | :--- | :--- |
| **Kraft** | `--color-kraft` | `#E8E4D9` | Fondo base (body), secciones cálidas. |
| **Paper** | `--color-paper` | `#F7F5F0` | Superficies de lectura, tarjetas, formularios. |
| **Forest** | `--color-forest` | `#2C5F2D` | Color primario, textos destacados, botones principales. |
| **Moss** | `--color-moss` | `#97BC62` | Secundario, bordes decorativos, acentos suaves. |
| **Safety** | `--color-safety` | `#FF8C00` | **Acción**, alertas, hover states, bordes de atención. |
| **Steel** | `--color-steel` | `#2E3A42` | Texto principal, bordes estructurales, fondos oscuros. |
| **Stone** | `--color-stone` | `#788475` | Texto secundario, metadatos. |

### 2.3 Patrones de Componentes (Reglas de Construcción)

*   **Contenedores (Cards/Forms):**
    *   Borde: `border-2 border-steel`
    *   Fondo: `bg-paper`
    *   Sombra: `shadow-tactile` (definida como `4px 4px 0px var(--color-steel)`)
    *   Hover: `hover:translate-x-[2px] hover:translate-y-[2px]` (efecto de presión física).
*   **Botones:**
    *   Estilo: Rectangulares o con radio pequeño (`rounded-sm`).
    *   Colores: `bg-forest` o `bg-safety` con texto blanco y borde `border-2 border-steel` o `border-white`.
    *   Texto: Uppercase, bold, tracking-wider.
*   **Tipografía:**
    *   Fuente: `Poppins` (Google Fonts).
    *   Jerarquía: Títulos en Bold/Black, uppercase para impacto. Textos de cuerpo con buen interlineado (`leading-relaxed`).

---

## 3. 🛠️ Stack Tecnológico

*   **Framework:** [Astro v5.16](https://astro.build/) (Renderizado Estático / SSG).
*   **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) (Integración vía Vite, sin archivo de configuración `tailwind.config.js` tradicional, configuración en CSS).
*   **Animaciones:**
    *   **Nativas:** Keyframes en `Layout.astro` (`fade-in-down`, `float`, `scroll`).
    *   **Librería:** `aos` (Animate On Scroll) para entradas de elementos.
*   **Imágenes:** `sharp` para optimización.
*   **Formularios:** HTML estándar (actualmente estáticos, listos para integración de backend).

---

## 4. 📂 Estructura del Proyecto

```bash
/
├── public/                 # Assets estáticos (imágenes sin procesar, favicon)
├── src/
│   ├── assets/             # Assets procesados (no usado intensivamente aún)
│   ├── components/         # Componentes de UI reutilizables
│   │   ├── UI/             # (Reservado para átomos: botones, inputs)
│   │   ├── Card.astro      # Tarjeta informativa (Estilo Eco-Industrial)
│   │   ├── ContactForm.astro # Formulario de contacto (Estilo Clipboard)
│   │   ├── Header.astro    # Navegación principal (Estilo Acero)
│   │   ├── Footer.astro    # Pie de página
│   │   ├── Hero.astro      # Sección principal de landing
│   │   └── ...
│   ├── layouts/            # Plantillas maestras
│   │   └── Layout.astro    # PUNTO CRÍTICO: Define variables CSS globales y fuentes
│   ├── pages/              # Rutas (File-based routing)
│   │   ├── index.astro
│   │   ├── contacto.astro
│   │   └── ...
│   └── styles/
│       └── global.css      # Estilos base adicionales
├── astro.config.mjs        # Configuración de Astro
└── package.json            # Dependencias
```

---

## 5. 🤖 Guía para Agentes IA (Contexto de Desarrollo)

Si eres una IA encargada de modificar este proyecto, sigue estas directrices:

1.  **Lectura Obligatoria:** Antes de editar estilos, lee `src/layouts/Layout.astro` para entender las variables CSS disponibles (`@theme`).
2.  **Consistencia:** No introduzcas colores nuevos (hex codes arbitrarios) a menos que sea absolutamente necesario. Usa las variables semánticas (`bg-kraft`, `text-steel`, `border-safety`).
3.  **Tailwind v4:** Recuerda que este proyecto usa Tailwind v4. La configuración está en el CSS, no en un archivo JS config. Las variables se declaran en `@theme`.
4.  **Imágenes:** Usa rutas absolutas o URLs externas para imágenes de placeholder si no tienes acceso a subir archivos, pero prefiere usar los assets existentes en `src/assets` o `public` si se te indica.
5.  **Astro Islands:** El proyecto es mayormente estático. Si añades interactividad compleja (React/Vue/Svelte), asegúrate de usar la directiva `client:load` o `client:visible` solo donde sea necesario para mantener el rendimiento.

---

## 6. 🚀 Instalación y Comandos

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build
npm run preview
```

---

**Desarrollado para Corprecam E.S.P**
*Dignificando la labor, reciclando el futuro.*
