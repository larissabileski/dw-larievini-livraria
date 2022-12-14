import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LivrosView from "../views/LivrosView.vue";
import EditorasView from "../views/EditorasView.vue";
import CategoriasView from "../views/CategoriasView.vue";
import AutoresView from "../views/AutoresView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/livros",
      name: "livros",
      component: LivrosView,
    },
    {
      path: "/categorias",
      name: "categorias",
      component: CategoriasView,
    },
    {
      path: "/editoras",
      name: "editoras",
      component: EditorasView,
    },
    {
      path: "/autores",
      name: "autores",
      component: AutoresView,
    },
  ],
});

export default router;
