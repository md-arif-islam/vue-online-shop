import { createRouter, createWebHistory } from "vue-router";
import Catalog from "../views/CatalogView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "catalog",
      component: Catalog,
    },
  ],
});

export default router;
