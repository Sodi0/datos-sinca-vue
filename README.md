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

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/Sodi0/datos-sinca-vue.git
   ```
2. Entra a la carpeta del proyecto:
   ```bash
   cd datos-sinca-vue
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
5. Abre el navegador en http://localhost:5173 (o el puerto que indique Vite).

## Uso
La aplicación permite:

1. **Seleccionar una región** de Chile desde el menú principal
2. **Visualizar datos actuales** de calidad del aire
3. **Consultar indicadores** como:
   - PM2.5 (Material particulado fino)
   - PM10 (Material particulado respirable)
   - O₃ (Ozono)
   - CO (Monóxido de carbono)
   - NO₂ (Dióxido de nitrógeno)
   - SO₂ (Dióxido de azufre)

## Demo en vivo

- [Ver aplicación desplegada en Netlify](https://calidadairechile.netlify.app/)

## Licencia

Este proyecto está bajo la licencia MIT — consulta el archivo LICENSE para más detalles.
