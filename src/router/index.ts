import { createRouter, createWebHistory } from "vue-router";
import ErrorPage from "@/views/ErrorPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/mapa",
    name: "Mapa",
    component: () => import("@/views/Mapa.vue"),
  },
  {
    path: "/estadisticas",
    name: "Estadisticas",
    component: () => import("../views/Estadisticas.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: ErrorPage,
    props: { code: 404, message: "Página no encontrada" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
