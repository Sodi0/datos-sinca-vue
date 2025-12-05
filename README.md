# Visualizacion de datos SINCA
[![Vue 3](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Netlify Status](https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> Plataforma web para consultar y visualizar datos de calidad del aire en Chile en tiempo real

**Visualización de Datos SINCA** es un proyecto educativo desarrollado para mejorar habilidades en desarrollo frontend, utilizando tecnologías modernas como Vue 3, Vite y Tailwind CSS. La aplicación consume la API pública del SINCA (Sistema de Información Nacional de Calidad del Aire) para ofrecer información actualizada sobre la calidad del aire en distintas regiones de Chile.

---

## Tecnologías utilizadas

- **Vue 3** - Framework progresivo de JavaScript para construir interfaces de usuario.
- **Vite** - Herramienta de build rápida y ligera para proyectos modernos de frontend.
- **Tailwind CSS** - Framework de utilidades CSS para un diseño rápido y responsivo.
- **API SINCA** - Fuente pública de datos de calidad del aire en Chile.
- **Netlify** - Para Despligle 

---

## Ejecución local

Para probar la aplicación localmente:

```bash
git clone https://github.com/Sodi0/datos-sinca-vue.git
cd datos-sinca-vue
npm install
npm run dev
# Abrir http://localhost:5173
```

## Demo en vivo
[Despliegue en vivo](https://calidadairechile.netlify.app/)

![Demo](./src/assets/demo.gif)
---

## Qué puedes ver en la app

- Mapa interactivo con estaciones coloreadas según su estado actual.
- Tarjetas y sparklines que muestran la tendencia reciente de cada estación.
- Buscador por nombre, comuna o región.
- Información por contaminante (PM2.5, PM10, O3, NO2, CO, SO2) cuando está disponible.

---

## Decisiones técnicas y notas (para quien revise el código)

- Mantengo la aplicación ligera y sin base de datos remota: los datos se obtienen directamente de la API SINCA y se mantienen en memoria en el cliente.
- `src/api/sinca.ts` contiene la llamada a la API; `src/api/useEstaciones.ts` transforma y filtra las estaciones.
- Recomendación: añadir `lastUpdated` y polling (cada 2–5 minutos) para mostrar la frescura de los datos y mantenerlos actualizados.
- Si se necesitara historial o compartir estado entre vistas, se puede añadir `IndexedDB` o un store con `Pinia`.

---

## Deploy

Para construir:

```bash
npm run build
```

Netlify o Vercel detectan proyectos Vite y permiten despliegue directo.

---

## Licencia

Este proyecto está bajo la licencia MIT — ver `LICENSE`.
