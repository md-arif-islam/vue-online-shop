import { createRouter, createWebHistory } from "vue-router";
import CatalogView from "../views/CatalogView.vue";
import ProductDetailsView from "../views/ProductDetailsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "catalog",
      component: CatalogView,
    },

    {
      path: "/product/:id",
      name: "ProductView",
      component: ProductDetailsView,
    },
  ],
});

export default router;
