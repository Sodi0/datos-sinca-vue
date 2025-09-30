import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/mapa",
    name: "Mapa",
    component: () => import("../views/Mapa.vue"),
  },
  {
    path: "/estadisticas",
    name: "Estadisticas",
    component: () => import("../views/Estadisticas.vue"),
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: () => import("../views/Contacto.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
